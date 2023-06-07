import styled from "styled-components";
import { useState } from 'react';

const DropDown = styled.div`
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

const Sorter = ({persons=[], setPersons = ()=>{}})=>{
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };

    const [rule, setRule] = useState('');

    const handleClick = (principle)=>{
        const newRule = principle;
        setRule(newRule);
        setPersons([...persons].sort((a,b)=>{
            if (a[newRule]>b[newRule]) return 1
            if (a[newRule]<b[newRule]) return -1
            return 0
        }));
        setOpen(false);
    }
    return(
        <div>
        <DropDown>
            <button onClick={handleOpen}>{rule || 'Dropdown'}</button>
            {open ? (
            <Menu className="menu">
            <li className="menu-item">
                <button onClick={()=>{handleClick('FirstName')}}>По имени</button>
            </li>
            <li className="menu-item">
                <button onClick={()=>{handleClick('LastName')}}>По фамилии</button>
            </li>
            <li className="menu-item">
                <button onClick={()=>{handleClick('FatherName')}}>По отчеству</button>
            </li>
            <li className="menu-item">
                <button onClick={()=>{handleClick('YearsOld')}}>По возрасту</button>
            </li>
            <li className="menu-item">
                <button onClick={()=>{handleClick('GenderCode')}}>По полу</button>
            </li>
            </Menu>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>}
        </DropDown>
            <div>
                по: {rule}
            </div>
        </div>
    )
}
export default Sorter