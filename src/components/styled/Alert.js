import styled from 'styled-components'

const Alert = styled.div`
  width: ${64*3 + 5*2*3 + 20*2}px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  border: 2px solid tomato;
  border-top: 0;
  padding: 10px 15px;
  border-radius: 0 0 14px 14px;
  color: tomato;
  font-size: 30px;
`

export default Alert

