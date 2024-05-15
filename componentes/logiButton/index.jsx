import React, { useState } from 'react';
import ButtonComponents from '../button/index';

const LogicAnswer = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    startDate: '',
    endDate: '',
    priority: '',
    comments: '',
  });

  const handleClick = (operation) => {
    switch (operation) {
      case 'EDITAR':
        break;
      default:
        break;
    }
  };

 

  return (
    <div>
      <div>
        <ButtonComponents tipo="EDITAR" onClick={() => handleClick('EDITAR')} />
      </div>
    </div>
  );
};

export default LogicAnswer;