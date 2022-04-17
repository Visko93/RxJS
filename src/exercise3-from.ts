// With from you provide an type/object, in diference to of where you need to provide the arguments
// `from` will tranform these data structures into Observables objects

import { fromEvent, Observable, interval, timer } from "rxjs";

// //With an Array
// from(["Alice", "Ben", "Oliver"]).subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log("Completed"),
// });

// const somePromise = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve("nova");
//     }, 1000);
//   } catch (e) {
//     reject(new Error(e));
//   }
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log("Yaaaah"),
// });

const optionCreator = (label: string) => {
  return `<option key="${label}" value="${label}">${label}</option>`;
};

const button = document.querySelector("#hello");
const nameSelect = document.querySelector("#names");
const versionSelect = document.querySelector("#versions");

console.log(button, nameSelect, versionSelect);

// const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
//   const clickHandler = (e: MouseEvent) => {
//     console.log("Still here");
//     subscriber.next(e);
//   };

//   button.addEventListener("click", clickHandler);
//   //This return is a reference to the tear down of a Observable
//   return () => {
//     button.removeEventListener("click", clickHandler);
//   };
// });

// const subscription = triggerClick$.subscribe({
//   next: (e) => console.log(e.type, e.x, e.y),
// });

const subscription = fromEvent<MouseEvent>(button, "click").subscribe({
  next: (e) => console.log(e.type, e.x, e.y),
  error: (error) => console.log(error),
});

setTimeout(() => {
  console.log("unsubscribe");
  subscription.unsubscribe(); //Clean up
}, 5000);

timer(2000).subscribe({
  next: (v) => console.log(v),
});

interval(2000).subscribe({
  next: (v) => console.log(v),
});
