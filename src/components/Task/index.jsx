import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container } from './style'

function Task(props) {
  const { id, index, title } = props;
  
  return (
    <Container>
      <Draggable draggableId={id} index={index} type="TASK">
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{title}</h4>
        </div>
      )}
      </Draggable>
    </Container>
 
  );
}

export default Task;