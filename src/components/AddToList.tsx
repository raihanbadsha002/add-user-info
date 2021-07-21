import React, { useState } from 'react';
import { IState as Props } from '../App';


interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps>= ({people, setPeople}) => {
 const [input, setInput] = useState({
     name:"",
     email: "",
     age:"",
     img:"",
     note: ""
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
     setInput({
         ...input,
        [e.target.name]:e.target.value
    })
 }

 const handleClick = () : void => {
     if (!input.name || !input.age || !input.img || !input.note) {

         return
     }
     setPeople([
         ...people,
         {
           name: input.name,
           email: input.email,
           age: parseInt(input.age),
           url: input.img,
           note: input.note  
         }
     ])
     setInput({
        name:"",
        email:"",
        age:"",
        img:"",
        note: ""
     })
 }
 
 

    return (
        <div className="row">
            <div className="col-12 mb-3">
                <input type="text" className="form-control" name="name" value={input.name} placeholder="User Name" onChange={handleChange} aria-label="User Name"/>
            </div>
            <div className="col-12 mb-3">
                <input type="email" className="form-control" name="email" value={input.age} placeholder="Email" onChange={handleChange} aria-label="Email"/>
            </div>
            <div className="col-12 mb-3">
                <input type="number" className="form-control" name="age" value={input.age} placeholder="Age" onChange={handleChange} aria-label="Age"/>
            </div>
            <div className="col-12 mb-3">
                <input type="text" className="form-control" name="img" value={input.img} placeholder="Image Url" onChange={handleChange} aria-label="Image Url"/>
            </div>
            <div className="col-12 mb-2">
               <textarea className="form-control" name="note" value={input.note} placeholder="Note" onChange={handleChange}></textarea>
            </div>
            <div className="col-12 mb-3">
               <button className="btn btn-warning text-white px-5" onClick={handleClick}>Add User Info</button>
            </div>
        </div>
    );
};

export default AddToList;