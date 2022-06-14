/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import styled from 'styled-components'

const StyledTitle = styled.div`
  color: ${(props) => props[0].color || 'red'};
  font-size: 14px;
`

const Line = (props) => {
  return <StyledTitle {...props} />
}
export default Line
