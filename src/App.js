import './App.css';
import BtnList from './BtnList';
import PersonList from './PersonList';
import { useState } from 'react';
import Information from './Information';
import CheckGenders from './CheckGenders';
import Dropdown from './Dropdown';
import SortedList from './SortedList';
import UserInput from './UserInput';

const BUTTONS = [1,2,3,10]
const SORTRULES = {
  0:{
    id:0,
    title:'По имени',
    field:'FirstName'
  },
  1:{
    id:1,
    title:'По фамилии',
    field:'LastName'

  },
  2:{
    id:2,
    title:'По возрасту',
    field:'YearsOld'
  },
  3:{
    id:3,
    title:'По полу',
    field:'Gender'
  }
}

function App() {
  const [persons, setPersons] = useState([]);
  const [genders, setGenders] = useState({woman: true, man: true});
  const [sortRule, setSortRule] = useState(null);
  return (
    <div className="App">
      <UserInput

      />
      <BtnList
        buttons = {BUTTONS}
        persons = {persons}
        setPersons = {setPersons} 
      />

      <button onClick={()=>{setPersons([])}}> Удалить всё </button>

      <CheckGenders
        genders = {genders}
        setGenders = {setGenders}
      />

      <Information
        persons = {persons}
      />

      <Dropdown
        defaultName = 'Сортировка'
        elements = {SORTRULES}
        defaultElement = {0}
        callback = {(id)=>{
          setSortRule(SORTRULES[id].field)
        }}
      />

      <SortedList
        List={PersonList}
        width={4}
        list = {persons}
        setPersons = {setPersons}
        genders = {genders}
        sortRule = {sortRule}
      />

    </div>
  );
}

export default App;
