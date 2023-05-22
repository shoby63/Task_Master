import React from 'react';
import List from './list';

export default function Display(props) {
  const arr = props.obj;
  console.log(arr)
  return (
    <div className="result_wrapper">
      {arr.map((element, idx) => (
        <List key={idx} index={idx} info={element} />
      ))}
    </div>
  );
}
