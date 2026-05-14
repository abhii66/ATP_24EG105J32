# Week 5 - CSS Flexbox, HTML Tables & Intro to React

## HTML Tables
Built three tables using `<table>`, `<tr>`, `<th>`, `<td>` with `colspan` and `rowspan` for merging cells. Styled with CSS (`border-collapse`, `padding`, `text-align`).

- Shopping list table with merged category headers
- Student grade table grouped by subject
- User profile table with images

## CSS Flexbox
Multiple layouts built using flexbox:

```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 40px;
```

- Navbar with horizontally spaced links
- Card layout with profile images and buttons
- Multi-column page layout (hero + content sections)
- City guide layout with nav, hero, and 3-column content

## React Basics
Two React apps using functional components and props.

**react1** — Product listing: hardcoded product array in `App.jsx`, mapped to a `Product` component that displays title and description.

**react2** — User listing: hardcoded users array mapped to a `User` card component with image, name, and email. Includes separate `Navbar` and `Footer` components.

```jsx
products.map((product) => <Product productObj={product} key={product.id} />)
users.map((user) => <User userObj={user} key={user.name} />)
```
