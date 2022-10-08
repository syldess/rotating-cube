# Rotating Cube

I made this React component used in my Roll A Die And Code app. It is an adaptation of the Rotating Cube tutorial of [David DeSandro](https://3dtransforms.desandro.com/cube).

## Purpose

To have a customizable rotating cube React component to show different images, text and backgrounds.

## Further improvements

- [ ] Add function to update state when cube is rotated
- [ ] Add easier size customization

## Usage

1. Clone or download this repo and add the `rotating-cube` folder into your `src` folder.
2. From your `src/App.js`, import Cube:

```javascript
import Cube from './rotating-cube/cube/Cube';
```

3. Add your custom `faces` and/or `customBackground` as component parameters (list and style object, see below for details)

Example:

```javascript
const renderFaces = {
  front: 1,
  right: 2,
  back: 3,
  left: 4,
  top: 5,
  bottom: 6,
};

// this example uses the same color on all faces
const customBackground = {
  front: 'hsla(200, 75%, 20%, .85)',
  right: 'hsla(200, 75%, 20%, .85)',
  back: 'hsla(200, 75%, 20%, .85)',
  left: 'hsla(200, 75%, 20%, .85)',
  top: 'hsla(200, 75%, 20%, .85)',
  bottom: 'hsla(200, 75%, 20%, .85)',
};

<Cube faces={renderFaces} customBackground={customBackground} />;
```

### Styles

Here are the custom styles possibilities, using JSX.

<table>
<tr>
<td> Property </td> <td> Type </td> <td> Default </td>
</tr>
<tr>
<td> <em>customBackground</em> </td>
<td> object </td>
<td>

```javascript
  {
    front: 'hsla(0, 100%, 50%, 0.7)',
    right: 'hsla(60, 100%, 50%, 0.7)',
    back: 'hsla(120, 100%, 50%, 0.7)',
    left: 'hsla(180, 100%, 50%, 0.7)',
    top: 'hsla(240, 100%, 50%, 0.7)',
    bottom: 'hsla(300, 100%, 50%, 0.7)',
  }
```

</td>
</tr>
<tr>
<td> <em>faces</em> </td>
<td> object </td>
<td>

```javascript
{
  front: 'Front',
  right: 'Right',
  back: 'Back',
  left: 'Left',
  top: 'Top',
  bottom: 'Bottom',
};
```

</td>
</tr>

</table>

---

**Default Style**

![](https://github.com/syldess/images-for-react-components-showcase/blob/main/rotating-cube/defaultStyles.gif)

**Custom Style**

![](https://github.com/syldess/images-for-react-components-showcase/blob/main/rotating-cube/customStyles.gif)

## Demo

Try it on [CodePen](https://codepen.io/sylvaindessureault/pen/RwyeYKr)

## License

Copyright (c) 2020 Sylvain Dessureault.

Distributed under the MIT license. See LICENSE for more information.
