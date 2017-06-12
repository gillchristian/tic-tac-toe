# React/Redux Tic-Tac-Toe

This project was bootstraped with [`create-react-app`](https://github.com/facebookincubator/create-react-app).

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

## Motivation

This is a very simple project made to compare `<styled-components />` and `{ glamorous }`. At the moment it only consists of a few components making up one view being server side rendered.

- [styled-components app](https://gillchristian.xyz/tic-tac-toe). Source in [`master branch`](https://github.com/gillchristian/tic-tac-toe).
- [glamorous app](https://gillchristian.xyz/tic-tac-toe-glam). Source in [`glamorous branch`](https://github.com/gillchristian/tic-tac-toe/tree/glamorous).

## Styled-components vs. Glamorous

Both styled-components & glamorous have a very similar API: they expose a factory function to generate React components with their own styles and provide helper methods for any valid DOM & SVG nodes.

styled-components does it by passing the actual CSS styles in a [tagged template literal](https://mxstbr.blog/2016/11/styled-components-magic-explained/) and interpolated functions that are called with the component props to generate dynamic styles. While glamorous does it by passing [glamor style objects](https://github.com/threepointone/glamor/blob/master/docs/api.md#cssrules) and functions also called with the component props and should return style objects.

In both approaches the component styles are parsed and added to a CSS class which is injected into a style tag in the head and applied to the underlying component via `className`.

[glamorous was actually inspired by styled-components](https://github.com/paypal/glamorous#inspiration).

```js
// ----- STYLED-COMPONENTS -----

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

```js
// ----- GLAMOROUS -----

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

### Docs

**styled-components**: [github](https://github.com/styled-components/styled-components) & [website](http://styled-components.github.io/).

**glamorous**: [github](https://github.com/paypal/glamorous) & [website (`WIP`)](http://glamorous.rocks/) (see the progress [here](http://rc.glamorous.rocks/)).

### Activity

**styled-components**: ~7850 :star: Under active development. [`v2` recently published](https://medium.com/styled-components/announcing-v2-f01ef3766ac2). Many packages published by the [styled-components organization](https://github.com/styled-components).

**glamorous**: ~1720 :star: Under active development. [recently published](https://hackernoon.com/introducing-glamorous-fb3c9f4ed20e).

### Adoption / Users

- `styled-components`: [built with styled components](https://github.com/styled-components/styled-components/blob/master/README.md#built-with-styled-components).
- `glamorous`: [users](https://github.com/paypal/glamorous/blob/master/other/USERS.md).

styled-components has has been around longer and has a winder adoption, user base and more packages and websites built with it.

### Examples & big open source code bases

**styled-components**

- [styled-componets-website](https://github.com/styled-components/styled-components-website).
- [others sites](https://github.com/styled-components/styled-components#websites).
- [libraries, components and helpers](https://github.com/styled-components/styled-components#libraries).

**glamorous**

- [glamorous-website](https://github.com/kentcdodds/glamorous-website) _under development_.
- [other sites](https://github.com/paypal/glamorous/blob/master/other/USERS.md).

### Reusability

**styled-components**

[`.extend` and `.withComponent`](https://www.styled-components.com/docs/basics#extending-styles) are ways the best reuse styled-components, either by extending the styles or by using the styles on other component, respectively. Or even combining the two.

```js
import styled from 'styled-components'

const Button = styled.button`
	color: palevioletred;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const TomatoButton = Button.extend`
	color: tomato;
	border-color: tomato;
`;

const Link = Button.withComponent('a')

const TomatoLink = Link.extend`
	color: tomato;
	border-color: tomato;
`;
```

Also it is possible to reuse chunks of CSS strings via interpolation or use the default expose factory to style other existing components:

```js
import styled from 'styled-components'

const someCSS = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenteredSection = styled.div`
  ${someCSS};

  padding: 10px;
  margin: 0 auto;
  max-width: 720px;
`

import { Link } from 'react-router'

const StyledLink = styled(Link)`
  color: tomato;
  text-decoration: none;
`
```

**glamorous**

Does not provide a way to extend components like styled-component does. But style objects can be reused and also the factory can be applied to other components.

```js
import glamorous from 'glamorous'

const someCSS = { 
  display: 'flex',
  justify-content: 'center',
  align-items: 'center',
}

const CenteredSection = glamorous.div(
  someCSS,
  {
    padding: 10,
    margin: '0 auto',
    maxWidth: 720,
  },
)

import { Link } from 'react-router'

const StyledLink = glamorous(Link)({
  color: 'tomato',
  textDecoration: 'none',
})
```

**NOTE**: One downside of reusing chunks of CSS or style objects is that it duplicates the amount of generated styles, while extending does not.

### Learnig curve

Both libraries require not so much effort to learn. They only require some basic concepts each:

**styled-components**: understand how [tagged template literals](https://mxstbr.blog/2016/11/styled-components-magic-explained/) work.

**glamorous**: understand [glamor style objects](https://github.com/threepointone/glamor/blob/master/docs/api.md#cssrules), which are very similar to the way regular React style objects work.

### Server side rendering

**styled-components**

**glamorous**

### Implementation / How it works / Bundle size

- `styled-components`:
- `glamorous`:
