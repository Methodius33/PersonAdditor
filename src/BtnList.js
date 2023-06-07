import AddPersonButton from "./AddPersonButton"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    margin: 0px 80px;
    margin-top: 16px;
    justify-content: space-between;
`

const BtnList = ({buttons, persons, setPersons})=>{
    return(
        <Wrapper>
            {buttons.map((button)=>(
                <AddPersonButton
                    key={button}
                    persons = {persons}
                    setPersons = {setPersons}
                    count = {button}
                />
            ))}
        </Wrapper>
    )
}
export default BtnList