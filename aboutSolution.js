```javascript
// pages/about.js

export default function About() {
  // Check if the environment variable is defined before accessing it
  const myCustomVariable = process.env.MY_CUSTOM_VARIABLE;

  if (myCustomVariable) {
    console.log(myCustomVariable);
  } else {
    console.log('MY_CUSTOM_VARIABLE is not defined.');
  }
}
```