import { useState, useEffect } from "react";
import "../style.css";

interface AcordeonProps {
  children: any;
  titulo: string;
  cerrado?: boolean;
}

const Acordeon = ({ children, titulo, cerrado = true }: AcordeonProps) => {
  const [estaCerrado, setEstaCerrado] = useState(Boolean);

  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);

  return (
    <div className="acordeon">
      <div
        className="acordeon-heading"
        onClick={() => setEstaCerrado(!estaCerrado)}
      >
        <h3>{titulo}</h3>
      </div>
      <div
        className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}
      >
        {children}
      </div>
    </div>
  );
};

export default Acordeon;
