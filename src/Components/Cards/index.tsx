import React from 'react';
import { IState } from '../../App'


const CardList: React.FC<IState> = ({people}) => {

    const renderList = (): JSX.Element[] => {
     return people.map(person => {
        return (
          <li className='List'>
            <div className='List-header'>
              <img className="List-img" src={person.url} alt="oi"></img>
              <h2>{person.name}</h2>
            
            </div>

            <p>{person.age} years old</p>
            <p className='List-note'>{person.note}</p>
        </li>
        )
          
        
    })
    }

    return (
        <ul>
          {renderList()}
        </ul>
    )

 
}

export default CardList
