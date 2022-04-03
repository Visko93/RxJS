import { Observable } from "rxjs";

let i = 0;
const observable$ = new Observable((subscriber) => {
  const interval = setInterval(() => {
    console.log("Running for " + i);

    subscriber.next(i);
  }, 1000);
  setTimeout(() => {
    subscriber.complete();
  }, 7000);

  return () => {
    clearInterval(interval);
  };
});

// observable$.subscribe({
//   next: (value) => {
//     i++;
//     console.log(value);
//   },
//   error: (error: Error) => console.error(error.message),
//   complete: () => console.log("No more values for this stream"),
// });

/**
 * OR WE CAN DO THIS
 */

const subscription = observable$.subscribe({
  next: (value) => {
    i++;
    console.log(value);
  },
  error: (error: Error) => console.error(error.message),
  complete: () => console.log("No more values for this stream"),
});

setTimeout(() => {
  //Runs before the complete event killing the stream
  //All effects inside the observable must be cleaned at the teardown phase (return () => clear)
  subscription.unsubscribe();
}, 5000);
