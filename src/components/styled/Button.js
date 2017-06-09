import styled from 'styled-components'

const Button = styled.button`
  color: ${p => p.theme.secondary};
  font-size: 16px;
  margin: 10px 10px 5px;
  padding: 5px 10px;
  border: 2px solid ${p => p.theme.secondary};
  border-radius: 3px;
  background-color: whitesmoke;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export default Button

