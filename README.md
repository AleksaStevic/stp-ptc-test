# How to remove the issue

In `Context1.ts` and `Context2.ts` there is an export of arrow function `Test`, comment this in order for issue to disappear:

```js
// export const Test = () => {
//   console.log("ctx2");
// };
```