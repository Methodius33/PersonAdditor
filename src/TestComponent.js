import { useState } from "react"
import styled from "styled-components"

const Checkbox = ({name, check, setCheck})=>{
    return(
        <label>
                <input
                    type="checkbox"
                    checked ={check}
                    onClick = {()=>{
                        setCheck(!check)
                    }}
                />
                {name}
            </label>
    )
}

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

const TestComponent = ()=>{
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <DropDown>
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
        <Menu className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </Menu>
        ) : null}
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
      </DropDown>
    );
}
export default TestComponent