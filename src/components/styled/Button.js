import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    fontSize: 16,
    margin: '10px 10px 5px',
    padding: '5px 10px',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 3,
    backgroundColor: 'whitesmoke',
    cursor: 'pointer',
    ':focus': {
      outline: 'none',
    },
  },
  (props, theme) => ({
    color: theme.secondary,
    borderColor: theme.secondary,
  }),
)

export default Button

