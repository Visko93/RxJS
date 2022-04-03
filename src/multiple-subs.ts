import { Observable } from "rxjs";

const someObservable$ = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 1000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

console.log("Sub 1 Starting");
someObservable$.subscribe((value: string) =>
  console.log("Subscription 1: ", value)
);

setTimeout(() => {
  console.log("Sub 2 Starting");
  someObservable$.subscribe((value: string) =>
    console.log("Subscription 2: ", value)
  );
}, 1000);
