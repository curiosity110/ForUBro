# Day 3: JavaScript and the Canvas

> Make it work, make it right, make it fast  
> -- KentBack

[We all do it](https://javascript.plainenglish.io/25-more-stackoverflow-programming-jokes-that-all-devs-can-relate-to-ebc2f9c11ca3)
[We do, we are all guity](https://blog.devgenius.io/best-programming-humor-compilations-2021-623473bfb0d)

## Interview question of the day

What would be the output of this snippet? How can we fix it?

```js
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
```

## Agenda

- Recap yesterday's concepts
  - What is `this`?
    - How can we find out the value of this?
    - Arrow functions are special
  - What is the `prototype`?
  - Interview question about `this`


- Async vs Sync code in JS
  - [Event Loop](https://app.excalidraw.com/l/4WXAxyQZiEo/8aEs1B2tl8j)
- Event Listeners
- Pong
