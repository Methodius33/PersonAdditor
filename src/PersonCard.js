import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100px;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    user-select: none;
    text-align: left;
    background-color: ${({sex})=>{
        if (!sex){
            return 'white'
        }
        return sex === 'woman' ? 'pink': 'blue' 
    }};
    color: ${({sex})=>{
        if (!sex){
            return 'black'
        }
        return sex === 'woman' ? 'black': 'white'
    }};
`

const TextRow = styled.div`
    margin-left: 4px;
`
const Button = styled.button`
    cursor: pointer;
`

const PersonCard = ({person, onDeletePerson})=>{
    return(
        <Wrapper
            sex = {person.GenderCode} 
           
        >
            <TextRow>Имя: {person.FirstName}</TextRow>
            <TextRow>Фамилия: {person.LastName}</TextRow>
            <TextRow>Отчество: {person.FatherName}</TextRow>
            <TextRow>Пол: {person.Gender}</TextRow>
            <TextRow>Возраст: {person.YearsOld}</TextRow>
            <Button onClick={()=>{onDeletePerson(person.id)}}>
                Удалить
            </Button>
        </Wrapper>
    )
}
export default PersonCard