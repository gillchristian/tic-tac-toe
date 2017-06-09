import glamorous from 'glamorous'

const Alert = glamorous.div(
  {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 15px',
    marginTop: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderBottom: 0,
    borderRadius: '14px 14px 0 0',
    backgroundColor: 'whitesmoke',
    fontSize: 24,
  },
  (props, theme) => ({
    borderColor: theme.main,
    color: theme.main,
  })
)

export default Alert

