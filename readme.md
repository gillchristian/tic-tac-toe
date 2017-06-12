# React/Redux Tic-Tac-Toe

This project was bootstraped with [`create-react-app`](https://github.com/facebookincubator/create-react-app).

## Motivation

This is a very simple project made to showcase the differences between `<styled-components />` (`SC`) and `{ glamorous }` (`G`). At the moment it only consists of a few components making up one view being server side rendered.

- [SC app](https://gillchristian.xyz/tic-tac-toe). Source is in [`master branch`](https://github.com/gillchristian/tic-tac-toe).
- [G app](https://gillchristian.xyz/tic-tac-toe-glam). Source is in [`glamorous branch`](https://github.com/gillchristian/tic-tac-toe/tree/glamorous).

## Developing

First of all install the dependencies. _Use wichever you like the most._ :smile:

```bash
$ yarn install
$ npm install
```

### Tasks

```bash
$ npm start     # start dev server
$ npm run build # build the project for production
$ npm test      # run tests
```

## Comparison: Styled-components vs. Glamorous

Both styled-components & glamorous have a very similar API: they expose a factory function to generate React components with they own styles. SC does by passing the styles in a tagged template literal, while G by passing objects & functions. Actually [glamorous was inspired by styled-components](https://github.com/paypal/glamorous#inspiration).
 
### Styled-components

- [Github](https://github.com/styled-components/styled-components).
- [Website](http://styled-components.github.io/).

#### The gist

```js
// mixins.js
export const centered = `
  display: flex;
  flex-direction: column;
  alig-items: center;
  justify-content: center;
`

// Button.js
import styled from 'styled-components'

import { centered } from './mixins'

export default styled.button`
  color: white;
  padding: .55rem 1.25rem;
  borderRadius: .3rem;

  ${centered}

  backgroudColor: ${props => props.success ? '#00af9e' : '#ff8127'};

  &:hover {
    backgroudColor: ${props => props.success ? '#007c70' : '#f36500'};
  }
)
```

### Glamorous

- [Github](https://github.com/paypal/glamorous).
- [Website](http://glamorous.rocks/) `[WIP]` (see the progress [here](http://rc.glamorous.rocks/)).

#### The gist

```js
// mixins.js
export const centered = {
  display: 'flex',
  flexDirection: 'column',
  aligItems: 'center',
  justifyContent: 'center',
}

// Button.js
import glamorous from 'glamorous'

import { centered } from './mixins'

export default glamorous.button(
  {
    color: 'white',
    padding: '.55rem 1.25rem',
    borderRadius: '.3rem',
  },
  centered,
  (props, theme) => ({
    backgroudColor: props.success ? '#00af9e' : '#ff8127', 
    ':hover': {
      backgroudColor: props.success ? '#007c70' : '#f36500',
    }
  }),
)
```
