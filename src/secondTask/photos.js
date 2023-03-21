import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addImage } from "../secondTask/slice";


export function Photos() {
  const images = useSelector((state) => state.photos.imageUrls);
  const dispatch = useDispatch()

  
  function handleChange(event) {
    let file = event.target.files[0];
    dispatch(addImage(file));        
  }


  return (
    <div>
        <input type="file" onChange={handleChange}/>
        <br/>
        {
            images.map((x) => {
              return <img src={x}/>
            })
        }
    </div>
  )
}