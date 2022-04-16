// With from you provide an type/object, in diference to of where you need to provide the arguments
// `from` will tranform these data structures into Observables objects

import { from } from "rxjs";

// //With an Array
// from(["Alice", "Ben", "Oliver"]).subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log("Completed"),
// });

const somePromise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("nova");
    }, 1000);
  } catch (e) {
    reject(new Error(e));
  }
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (v) => console.log(v),
  complete: () => console.log("Yaaaah"),
});
