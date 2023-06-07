import styled from "styled-components";
import { useState } from 'react';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  margin: auto;
`
const Menu = styled.ul`
    position: absolute;

    list-style-type: none;
    margin: 5px 0;
    padding: 0;

    border: 1px solid grey;
    width: 150px;

    & >li {
        margin: 0;

        background-color: white;
    }
    & > li:hover{
        background-color: lightgray;
    }
    & > li > button {
        width: 100%;
        height: 100%;
        text-align: left;

        background: none;
        color: inherit;
        border: none;
        padding: 5px;
        margin: 0;
        font: inherit;
        cursor: pointer;
    }
`


const DropdownElement = ({element, handleClick = ()=>{}})=>{
    return(
        <li >
            <button onClick={()=>{handleClick(element.id)}}>{element.title}</button>
        </li>
    )
}

const Dropdown = ({defaultName='', elements={}, callback = ()=>{}, defaultElement = null})=>{
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };

    const [currentElement, setCurrentElement] = useState(defaultElement);

    const handleClick = (elementId)=>{
        setCurrentElement(elementId);
        callback(elementId);
        setOpen(false);
    }
    return(
        <Wrapper>
            <button onClick={handleOpen}>{elements[currentElement]?.title || defaultName}</button>
            {open ? (
            <Menu>
                {Object.values(elements).map((element)=>(
                    <DropdownElement
                        key = {element.id} 
                        element = {element}
                        handleClick = {handleClick}
                    />
                ))}
            </Menu>
            ) : null}
        </Wrapper>
    )
}
export default Dropdown