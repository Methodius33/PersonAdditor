import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"

const Wrp = styled.span`
    font-weight: bold;
    text-decoration: underline;
`


const Information = ({persons=[]})=>{
    const personsCount = useMemo(()=>{
        return persons.length
    },[persons])
    const femaleCount = useMemo(()=>{
        return persons.reduce((accum, value)=>(value.GenderCode === 'woman' ? accum+1 : accum), 0)
    },[persons])
    const maleCount = useMemo(()=>{
        return personsCount - femaleCount
    },[persons])
    return(
        <div>
           <div>общее: <Wrp>{personsCount}</Wrp></div>
           <div>женщин: <Wrp>{femaleCount}</Wrp></div>
           <div>мужчин: <Wrp>{maleCount}</Wrp></div>
        </div>
        
    )
}

export default Information