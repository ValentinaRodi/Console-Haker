/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { useState } from 'react'
import Console from "./Console"
import Title from "./Title"



const Theme = () => {
    const [color, setColor] = useState('green')
    
    const ButtonTheme = styled.button`
        background-color: ${color};
        height: 30px;
        width: 60px;
        font-size: 14px;
        border-radius: 5px;
        margin-left: ;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `

    const onClick = () => {
        if(color === "green") {
            setColor('red')   
            
        } else setColor('green') 
            
    }
    
    return (
        <div>
            <ButtonTheme type="button" onClick={onClick} >Theme</ButtonTheme>
            <Title color={color}>Console CMD. SKYPRO_REACT</Title>
            <Console color={color}/>
        </div>  
    ) 
}

export default Theme