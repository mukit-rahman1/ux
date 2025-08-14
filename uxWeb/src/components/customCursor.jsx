import { useEffect, useState } from "react";
import "../styles/customCursor.css";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <img src="../../cursor.svg" alt="cursor" draggable="false" />
    </div>
  );
}
