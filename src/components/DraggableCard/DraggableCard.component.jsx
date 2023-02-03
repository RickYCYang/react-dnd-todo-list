import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../Constants';
import Card from '../Card/Card.component';

const DraggableCard = (props) => {
  // eslint-disable-next-line
  const [{}, dragRef, preview] = useDrag({
    type: ItemTypes.CARD,
    /** item is the 1st return variable of useDrop */
    item: {
      columnIndex: props.columnIndex,
      task: props.task,
      index: props.index,
    },
    ...props,
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

export default DraggableCard;
