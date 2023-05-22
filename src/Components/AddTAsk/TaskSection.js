import React, { useState } from 'react';
import '../../public/styles/TaskSection.css';
import icon from '../../Assets/Web capture_18-5-2023_184145_app.logomaster.ai.jpeg';
import Display from './Display';

export default function TaskSection() {
  const [listRender, setListRender] = useState([]);
  const [sub, setSub] = useState('');
  const [det, setDet] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      subject: sub,
      details: det,
      date: date,
    };

    setListRender([...listRender, newTask]);

    // Reset the input field values
    setSub('');
    setDet('');
    setDate('');
  };

  return (
    <div className="result_container">
      <img className="img_wrapper" src={icon} alt="TaskMaster" />
      <section className="form_wrapper">
        <p>Add Task</p>
        <form method="post">
          <input
            type="text"
            placeholder="Enter Task Subject"
            name="subject"
            value={sub}
            onChange={(event) => setSub(event.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Task Details"
            name="detail"
            value={det}
            onChange={(event) => setDet(event.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            name="date"
          />
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </section>
      <Display obj={listRender} />
    </div>
  );
}
