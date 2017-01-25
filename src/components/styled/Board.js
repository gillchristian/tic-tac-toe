import styled from 'styled-components'

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: ${64*3 + 5*2*3 + 20*2}px;
  margin: 20px;
  padding: 20px;
  border-radius: 14px;
  background-color: whitesmoke;
  box-shadow: 0 2px 10px gray;
`

export default Board

