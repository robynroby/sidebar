import React from 'react'
import './Row2.css'

function Row2() {
  return (
    <div className='container'>
        <div className='row-container'>
            <div class="name">Name</div>
            <div class="number">Room Number</div>
            <div class="status">Status</div>
            <div class="date">Date Paid</div>
        </div>
        <div className="btn">
            <button>Remove</button>
        </div>
    </div>
  )
}

export default Row2