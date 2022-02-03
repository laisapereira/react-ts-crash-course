import React, {useState} from 'react';
import './App.css';

import Card from './Components/Cards'

interface IState {
  people:{
    name:string
    age:number
    url:string
    note?:string
  }[]

}

function App() {


 const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Laisa Pereira',
      url: "https://imagensemoldes.com.br/wp-content/uploads/2018/05/Meu-Malvado-Favorito-Minions-14-PNG.png",
      age:18,
      note: "Gosta de bolo"

    }



 ])



 
  return (
    <div className="App">
        <h1>People Invited to my party</h1>
        <Card people={people} />
    </div>
  );
}

export default App;
