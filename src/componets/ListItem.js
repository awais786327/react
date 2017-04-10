import React from 'react';

const ListItems = (props) => {

  return (
    <li className="cursor"
        onClick={() => {
          props.clickHandler(props.index)}
          }>
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          props.removeTask(props.index)
          }}>
        remove
      </button>
      &nbsp;
      <span className={props.task.completed ? 'completed' : ''}>
        { props.task.name }
      </span>
    </li>
  );

};

export default ListItems;