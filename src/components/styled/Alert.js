import styled from 'styled-components'

const Alert = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  margin-top: 10px;
  border: 2px solid ${p => p.theme.main};
  border-bottom: 0;
  border-radius: 14px 14px 0 0;
  background-color: whitesmoke;
  color: ${p => p.theme.main};
  font-size: 24px;
`

export default Alert

