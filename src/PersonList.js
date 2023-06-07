import PersonCard from "./PersonCard";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${({width = 4}) => (`repeat(${width}, 220px)`)};
    grid-gap: 8px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`

const PersonList = ({list: persons = [], setPersons, width, genders ={}})=>{
    return(
        <Wrapper
            width = {width}
        >
            {persons.filter((person)=>(genders[person.GenderCode] === true))
            .map((person)=>(
                <PersonCard
                    key = {person.id}
                    person = {person}
                    onDeletePerson = {(personId)=>{
                        setPersons(persons.filter(({id})=>(id !== personId)))
                    }}
                />
            ))}
        </Wrapper>
    )
};

export default PersonList;