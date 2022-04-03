import { Observable } from "rxjs";

const someObservable$ = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 1000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

/**
 * This Structure can be changed for a shorter version
 * If you will respon for the next values only
 */
// const observer = {
//   next: (value: string) => console.log(value),
// };
// someObservable$.subscribe(observer);

// /*------>>>*/ someObservable$.subscribe((value: string) => console.log(value));
/*------>>>*/ const subscription = someObservable$.subscribe((value: string) =>
  console.log(value)
);

setTimeout(() => {
  console.log("Unsubscribe");

  subscription.unsubscribe();
}, 3000);
