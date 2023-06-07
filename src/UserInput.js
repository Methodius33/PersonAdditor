import { cyrb53 } from "./utils";
import axios from "axios";
import { useState } from "react";
import Dropdown from "./Dropdown";

const addPerson = async (callBack, count, gender, typeName)=>{
    const response = await axios.get(`https://api.randomdatatools.ru/?count=${count}?gender=${gender}?typeName=${typeName}`)
    if (count === 1){
        const newPerson = {
            ...response.data, 
            id: cyrb53(response.data.PasportNum)
        }
        callBack([newPerson]);
    }else{
        const newPersons = response.data.map(person => {
            const newPerson = {
                ...person, 
                id: cyrb53(person.PasportNum)
            }
            return(newPerson);
        });
        callBack(newPersons)
    }
}

const GENDERS = {
    0: {id:0,
        title:'all'
    },
    1: {id:1,
        title:'man'
    },
    2: {id:2,
        title:'woman'
    }
}

const TYPE_NAMES = {
    0: {
        id: 0,
        title:'classic'
    },
    1: {
        id:1,
        title:'rare'
    },
    2: {
        id:2,
        title:'all'
    }
}

const UserInput = ()=>{
    const [count, setCount] = useState(0);
    const [gender, setGender] = useState('');
    const [typeName, setTypeName] = useState('');
    return(
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                setCount(0);
            }}
        >
            <input
                type='number'
                min ='1'
                max='100'
                value={count}
                onChange={(event)=>{
                    setCount(event.target.value)
                }}
            />
            <Dropdown
                defaultName="Gender"
                defaultElement={0}
                elements={GENDERS}
                callback={(id)=>{
                    setGender(GENDERS[id])
                }}
            />
            <Dropdown
                defaultName="TypeName"
                defaultElement={0}
                elements={TYPE_NAMES}
                callback={(id)=>{
                    setTypeName(TYPE_NAMES[id])
                }}
            />
            <input 
                type= 'submit'
                value= 'Добавь людей'
            />
        </form>
    )
}

export default UserInput