import React from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

interface TodoItem {
  id: number;
  name: string;
}

const Todo: React.FC = () => {
  const [list, setList] = React.useState<TodoItem[]>(() => {
    const savedList = localStorage.getItem("todoList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const add_todo = () => {
    if (ref.current && ref.current.value.trim() !== "") {
      setList([
        ...list,
        {
          id: Date.now(),
          name: ref.current.value,
        },
      ]);
      ref.current.value = "";
    }
  };

  const delete_todo = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        placeholder="Create TODO"
        ref={ref}
        style={{ padding: "8px", width: "70%", marginRight: "8px" }}
      />
      <button
        onClick={add_todo}
        style={{ padding: "8px 16px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
      >
        Add Todo
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none", padding: 0 }}
            >
              {list.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: "8px",
                        margin: "8px 0",
                        cursor: "pointer",
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {item.name}
                      <button
                        onClick={() => delete_todo(item.id)}
                        style={{
                          backgroundColor: "#ff4d4d",
                          color: "white",
                          border: "none",
                          padding: "4px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Todo;