import React, { useState, useEffect } from 'react';
import LogicAnswer from '../logiButton/index';
import Tablero from '../tablero/index';


const Dogis = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tasks');
        const data = await response.json();
        setTareas(data);
      } catch (error) {
      }
    };
    fetchTareas();
  }, []);

  return (
    <div className="App">
      <Tablero tareas={tareas}/>
    </div>
  );
};

export default Dogis;