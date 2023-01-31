import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewdata}) {
    const [open, setOpen] = useState(false);
  return (
    <>
     <Button className='ms-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button><br></br>
      <Collapse in={open}>
        <div id="example-collapse-text">
            {
                reviewdata.map(item=>
                    <div>
                       <h2>{item.name}</h2> <h4> {item.date}</h4>
                       <h5>{item.rating} </h5>
                     <p>  {item.comments}</p>
                    </div>
                )
            
                }
        </div>
      </Collapse>
    </>
  )
}

export default Review