import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    email: string;
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
   {
     name: "Jackson Levi",
     email: "jackson453@gmail.com",
     url: "https://www.mantruckandbus.com/fileadmin/_processed_/8/3/csm_man-sebastian-voell_cffd1f64ae.jpg",
     age: 45,
     note: "I am Programmer,I have no life."
   }

  ]);
  
  return (
    <div className="app">
       <div className="container my-5">
         <div className="row">
           <div className="col-md-6">
              <h2 className="text-uppercase text-center mb-4">Add All User Information</h2>
              <List people={people}/>
           </div>
           <div className="col-md-6">        
              <AddToList people={people} setPeople={setPeople}/>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;
