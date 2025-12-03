debugger;

const greet = (name) => {
  const greeting = makeGreeting(name);
  return greeting + "!";
}

const makeGreeting = (name) => {
  return "Hello, " + name;
}

const message = greet("Maya");
console.log(message);


/* 
Callstack:          
---------           
[         ]




Variables:
----------
Global: 
- greet = ?
- makeGreeting = ?
- message = ?

greet():
- name = ?
- greeting = ?

makeGreeting():
- name = ?
*/