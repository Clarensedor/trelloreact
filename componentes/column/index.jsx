import React from 'react';
import styled from 'styled-components';

const ColumnaContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const ColumnaInfo = styled.p`
  margin: 8px 0;
`;

const Columna = ({ id, title, description, assignedTo, startDate, status, endDate, priority, comments }) => {
  return (
    <ColumnaContainer>
      <ColumnaTitle>{title}</ColumnaTitle>
      <ColumnaInfo>{description}</ColumnaInfo>
      <ColumnaInfo>Asignado a: {assignedTo}</ColumnaInfo>
      <ColumnaInfo>Fecha de inicio: {startDate}</ColumnaInfo>
      <ColumnaInfo>Estado: {status}</ColumnaInfo>
      <ColumnaInfo>Fecha de finalización: {endDate}</ColumnaInfo>
      <ColumnaInfo>Prioridad: {priority}</ColumnaInfo>
      <ColumnaInfo>Comentarios: {comments}</ColumnaInfo>
    </ColumnaContainer>
    
  );
};

export default Columna;