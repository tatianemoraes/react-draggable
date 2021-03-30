import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task";

import { Container } from './style'

export function Column(props) {
  const { droppableId, list, type } = props;

  console.log("type = ", droppableId, list.map(v => v.id));

  return (
    <Container>
      <Droppable droppableId={droppableId} type={type}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <h2>{droppableId}</h2>

          {list.map((val, index) => {
            return (
              <Task id={val.id} key={val.id} index={index} title={val.title} />
            );
          })}

          {provided.placeholder}
        </div>
      )}
      </Droppable>
    </Container>
    
  );
}
