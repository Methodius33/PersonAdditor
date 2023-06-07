import axios from "axios";
import {cyrb53} from "./utils";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    background-color: aqua;
    border-width: 1px;
    font-weight: bold;
`

const addPersonV2 = async (callBack, count)=>{
    const response = await axios.get(`https://api.randomdatatools.ru/?count=${count}`)
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
const AddPersonButton = ({persons,setPersons, count = 1})=>{
    return(
        <Button 
            type = "button"
            onClick={()=>{
                addPersonV2((newPersons)=>{
                    setPersons([...persons, ...newPersons])
                }, count)
                console.log('endClick')
            }}
        >
            {`Добавь ${count} человека`}
        </Button>
    )
}
export default AddPersonButton