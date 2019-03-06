---
title: "Why you shouldn't use semicolons when you're learning JavaScript"
date: "2018-10-30"
twitterimage: "./semicolon.png"
---

![semicolon](./semicolon.png)

If you're new to JavaScript, I'm sure you've learned that you put a semicolon at the end of each expression. That's just what you do, right? But if you're learning JavaScript, not only do you not _need_ to use semicolons in JavaScript, you're making your life harder by using them.

I used to use semicolons after every expression in JavaScript. But it's not necessary because of the nice JavaScript feature of ASI.

### The ASI has your back

ASI stands for Automatic Semicolon Insertion. It's a feature of JavaScript that will add a semicolon for you at the end of an expression if you omit one.

Once the code is all compiled inside the browser, it will work the same whether you use semicolons or not. JavaScript will do everything for you.

### But, why not?

If it's a habit for you to put a semicolon at the end of every expression, you might be wondering why _not_? It's not hurting anybody, right?

But it's not always that easy. Sometimes, it's not exactly straightforward if you should include a semicolon or not.

```javascript
// where do you put semicolons on an ES5 function?
function dog() {
  return {
    breed: "Shiba" // AVOID!
  } // here
} // AVOID!

// OK, how about an arrow function?
const anotherDog = () => {
  return {
    breed: "Akita" // AVOID!
  } // here
} // here too

// let's try an ES6 class . . .
class Dog {
  bark() {
    return "woof" // here
  } // AVOID!
} // AVOID!
```

It's a little confusing, right? And when you're first learning JavaScript and are trying to understand bunch of new concepts, why not make it easier for yourself?

When writing code, you just want to make sure it's human-readable. The machine doesn't care if you added a semicolon or not.

For me, I have enough things to worry about when working with JavaScript. If I can save a little bit of mental energy by not using any semicolons, I'll take it, right?

### But leaving out semicolons can break your code!

OK, I'll admit it. There's a few edge cases that will actually break things if you leave out a semicolon. Here's one example that's always brought up:

```javascript
console.log("Dogs are pretty cool")
["Shiba", "Akita", "Golden Retriever"].forEach(dog => {
  console.log(`${dog} is a cool dog 👍`)
})
// breaks because it compiles the console.log and array to the same expression
// console.log("Dogs are pretty cool")[("Shiba", "Akita", "Golden Retriever")]
// this breaks everything 💀
```

In this case, you can fix it with a semicolon before the array, which is a little ugly, but works:

```javascript
console.log("Dogs are pretty cool")
;["Shiba", "Akita", "Golden Retriever"].forEach(dog => {
  console.log(`${dog} is a cool dog 👍`)
}) // works
```

OK, but who writes code like that? You can simplify it by putting the array in its own variable:

```javascript
console.log("Dogs are pretty cool")
const dogs = ["Shiba", "Akita", "Golden Retriever"]
dogs.forEach(dog => {
  console.log(`${dog} is a cool dog 👍`)
}) // works
```

But even simpler, if you're not using semicolons, all you have to remember is **never start a line with `[`, `(`, or `` ` ``**. Problem solved.

### Make your life easier

I've been working without semicolons for months now, and it's one less thing I have to worry about.

If you're new to JavaScript, try dropping the semicolons and see what happens. Give it a try. Chances are, there's no going back.