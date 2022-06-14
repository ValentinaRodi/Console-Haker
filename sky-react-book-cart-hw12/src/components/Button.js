/* eslint-disable react/jsx-props-no-spreading */
import styled, { keyframes } from 'styled-components'

const animationButton = keyframes `
    0% {
        animation-timing-function: ease-out;
        transform: scale(1);
        transform-origin: center center;
    }

    10% {
        animation-timing-function: ease-in;
        transform: scale(0.91);
    }

    17% {
        animation-timing-function: ease-out;
        transform: scale(0.98);
    }

    33% {
        animation-timing-function: ease-in;
        transform: scale(0.87);
    }

    45% {
        animation-timing-function: ease-out;
        transform: scale(1);
    }
`

const StyledButton = styled.button`
  background-color: ${(props) => props[0].color || 'green'};
  height: 30px;
  width: 60px;
  font-size: 14px;
  border-radius: 5px;
  margin-left: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    height: 40px;
    width: 80px;
    font-size: 24px;}
  animation: ${animationButton} 2s ease 0s infinite normal forwards;
`


const Button = (props) => {
    let isDisabled = true
    
    if(props.lines.length > 1) {
        isDisabled = false 
    }
    
    const onClick = () => {
        if(props.lines.length > 1) {
            
            props.lines.splice(1, props.lines.length)
            props.setLines([...props.lines])
        } 
    }
    return <StyledButton type="button" {...props} disabled={isDisabled} onClick={onClick}/>  
}

export default Button