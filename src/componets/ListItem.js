import React from 'react';

const ListItems = (props) => {

  return (
    <li className="cursor" onClick={() => {props.clickHandler(props.index)}}>
      <span className={props.task.completed ? 'completed' : ''}>
        { props.task.name }
      </span>
      <b> { props.task.completed ? 'completed' : '' } </b>
    </li>
  );

};

export default ListItems;