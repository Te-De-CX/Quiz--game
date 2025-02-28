import React from "react";

interface TodoItem {
  id: number;
  name: string;
}

const Todo: React.FC = () => {
  const [list, setList] = React.useState<TodoItem[]>([]);
  const ref = React.useRef<HTMLInputElement>(null);

  const add_todo = () => {
    if (ref.current && ref.current.value.trim() !== "") {
      setList([
        ...list,
        {
          id: 1 + list.length,
          name: ref.current.value,
        },
      ]);
      ref.current.value = ""; // Clear the input field after adding
    }
  };

  const delete_todo = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <input type="text" placeholder="Create TODO" ref={ref} />
      <button onClick={add_todo}>Add Todo</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => delete_todo(item.id)}>Delete</button>
            <button>move up</button>
            <button>move down</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;