import React from 'react';
import { IState as IProps } from '../App';


const List: React.FC<IProps> = ({ people }) => {

    const renderList = () => {
        return people.map((person) => {
          return (
            <div className="card mb-3" style={{maxWidth:"540px"}}>
             <div className="row g-0">
               <div className="col-md-4">
                <img src={person.url} alt="" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.age} years old</p>
                  <p className="card-text">{person.note}</p>
                </div>
              </div> 
             </div>
            </div>
          )
        })
    }
    
    
    return (
        <>
          <ul>
             {renderList()}
          </ul>
            
        </>
    );
};

export default List;



