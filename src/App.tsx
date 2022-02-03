import React, {useState} from 'react';
import './App.css';

// adicionando o setPeople no AddList porque a gente precisa manipular e transformar o componente anexando coisas novas a ele

import Card from './Components/Cards'
import AddTolist from './Components/AddToList'

export interface IState {
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

        <div >

        </div>
        <AddTolist people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
