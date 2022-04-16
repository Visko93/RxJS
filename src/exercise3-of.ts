import { Observable, of } from "rxjs";

function ourOf(...args: string[]): Observable<string> {
  return new Observable((subscriber) => {
    for (let arg of args) {
      subscriber.next(arg);
    }
    subscriber.complete();
  });
}

ourOf("Alice", "Ben", "Charlie").subscribe({
  next: (c) => console.log(c),
  error: (e) => console.log(e),
  complete: () => console.log("Completed"),
});

// This is similar to this
/**
 * of("Alice", "Ben", "Charlie").subscribe({
 *  next: (c) => console.log(c),
 *  error: (e) => console.log(e),
 *  complete: () => console.log("Completed"),
 * });
 * */

// const names$ = new Observable((subscreiber) => {
//   subscreiber.next("Alice");
//   subscreiber.next("Ben");
//   subscreiber.next("Charlie");
//   subscreiber.complete();
// });

// names$.subscribe({
//   next: (c) => console.log(c),
//   error: (e) => console.log(e),
//   complete: () => console.log("Completed"),
// });
