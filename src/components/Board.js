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
  /* Paper stack box-shadow */
  /* @link: http://jsfiddle.net/chriscoyier/PBzLJ/ */
  background: #eee;
  box-shadow:
      0 1px 1px rgba(0,0,0,0.15),
      0 10px 0 -5px #eee,
      0 10px 1px -4px rgba(0,0,0,0.15),
      0 20px 0 -10px #eee,
      0 20px 1px -9px rgba(0,0,0,0.15);
`

export default Board
