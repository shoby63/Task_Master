import React from 'react'
import '../../public/styles/list.css'
export default function list({index,info}) {
  return (
    <div className='list_wrapper'>
        <div className="s_no">{index}</div>
        <h4>{info.subject}</h4>
        <p type='date'>{info.date}</p>
    </div>
  )
}
