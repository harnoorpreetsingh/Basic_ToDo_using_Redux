import { useSelector, useDispatch } from "react-redux";
import { removeToDo, editToDo } from "../redux/features/todo/todoSlice.js";
import { useState } from "react";

const ToDo = () => {
  const todo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditSubmit = (id) => {
    dispatch(editToDo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div>ToDos:   </div>
      <ul>
        {todo.map((td) => (
          <li key={td.id}>
            {editId === td.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSubmit(td.id)}>Save</button>
              </>
            ) : (
              <>
                {td.text}
                <button onClick={() => handleEdit(td.id, td.text)}>Edit</button>
                <button onClick={() => dispatch(removeToDo(td.id))}>X</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
