import { useState } from "react";

const getRandomColor = () => {
  const colores = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
  return colores[Math.floor(Math.random() * colores.length)];
};

const getRandomType = () => {
  const types = ["div", "badge", "icon"];
  return types[Math.floor(Math.random() * types.length)];
};

export default function DomManipulator() {
    const [elements, setElements] = useState([]);

      const addElement = () => {
        const newElement = {
          id: Date.now(),
          type: getRandomType(),
          color: getRandomColor(),
        };
        setElements((prevElements) => [...prevElements, newElement]);
      };

  const clearElements = () => setElements([]);

  const removeElement = (id) => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== id));
  };

  return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <div style={{ marginBottom: "20px" }}>
            <button onClick={addElement} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}>Agregar Elemento</button>
            <button onClick={clearElements} style={{ padding: "10px 20px", fontSize: "16px" }}>Vaciar</button>
      </div>



      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {elements.map((el) => (
          <div
            key={el.id}
            onClick={() => removeElement(el.id)}
            style={{ backgroundColor: el.color, width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "18px", color: "white", borderRadius: "8px" }}
          >
            {el.type === "div" && <div>Div</div>}
            {el.type === "badge" && <span>Badge</span>}
            {el.type === "icon" && <span>🧰</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
