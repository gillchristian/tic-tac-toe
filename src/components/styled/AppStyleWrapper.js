import glamorous from 'glamorous'

const AppStyleWrapper = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    fontFamily: 'Helvetica',
  },
  (props, theme) => ({
    backgroundColor: theme.bg,
  }),
)

export default AppStyleWrapper

