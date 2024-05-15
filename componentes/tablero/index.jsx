import React from 'react';
import styled from 'styled-components';
import Columna from '../column/index';
import LogicAnswer from '../logiButton';
    
const TableroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnaContainer = styled.div`
  width: 30%;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const Tablero = ({ tareas }) => {
  const todoTareas = tareas.filter((tarea) => tarea.status === 'To Do');
  const doingTareas = tareas.filter((tarea) => tarea.status === 'In Progress');
  const finishTareas = tareas.filter((tarea) => tarea.status === 'Done');

  return (
    <TableroContainer>
      <ColumnaContainer>
        <ColumnaTitle>Haciendo</ColumnaTitle>
        {todoTareas.map((tarea) => (
          <Columna
            key={tarea.id}
            id={tarea.id}
            title={tarea.title}
            description={tarea.description}
            assignedTo={tarea.assignedTo}
            startDate={tarea.startDate}
            status={tarea.status}
            endDate={tarea.endDate}
            priority={tarea.priority}
            comments={tarea.comments}
          />
        ))}
      </ColumnaContainer>
      <LogicAnswer />
      <ColumnaContainer>
        <ColumnaTitle>En proceso</ColumnaTitle>
        {doingTareas.map((tarea) => (
          <Columna
            key={tarea.id}
            id={tarea.id}
            title={tarea.title}
            description={tarea.description}
            assignedTo={tarea.assignedTo}
            startDate={tarea.startDate}
            status={tarea.status}
            endDate={tarea.endDate}
            priority={tarea.priority}
            comments={tarea.comments}
          />
        ))}
      </ColumnaContainer>
      <LogicAnswer />
      <ColumnaContainer>
        <ColumnaTitle>Terminado</ColumnaTitle>
        {finishTareas.map((tarea) => (
          <Columna
            key={tarea.id}
            id={tarea.id}
            title={tarea.title}
            description={tarea.description}
            assignedTo={tarea.assignedTo}
            startDate={tarea.startDate}
            status={tarea.status}
            endDate={tarea.endDate}
            priority={tarea.priority}
            comments={tarea.comments}
          />
        ))}
      </ColumnaContainer>
      <LogicAnswer />
    </TableroContainer>
  );
};

export default Tablero;