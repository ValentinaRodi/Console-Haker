/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled from 'styled-components'
import Line from './Line'
import Button from "./Button"

const StyledConsole = styled.textarea`
  display: none
  width: 100%
  height: 20px;
  overflow: hidden;
  resize: none;
  margin-bottom: -3px;
  background: black;
  font-size: 24px;
  border: none;
  &:focus{
    outline:none
  }
  color: ${(props) => props.color || 'green'};
`

const Console = (...props) => {
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>'])

  const onKeyPress = (e) => {
    
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>'])
      e.target.value = ''
    }
  }

  return (
    <div>
      {lines.map((line) => (
        <Line {...props}>{line}</Line>
      ))}
      <StyledConsole  onKeyPress={onKeyPress} {...props}/>
      <Button lines={lines} setLines={setLines} {...props}>Clean</Button>
    </div>
  )
}
export default Console
