import { Observable } from "rxjs";

const observer$ = new Observable((subscriber) => {
  console.log("Entering Observable");
  subscriber.next("First Value being emmited");
  setTimeout(() => {
    subscriber.next("Second Value being emmited");
  }, 2000);
  setTimeout(() => {
    subscriber.next("Third Value being emmited");
    subscriber.complete();
  }, 4000);

  //Teardown the subscription
  return () => {
    subscriber.unsubscribe();
  };
});

console.log("Entering Subscriber");
observer$.subscribe({
  next: (value: string) => console.log(value),
  error: (error: Error) => console.log(error.message),
  complete: () => console.log("All observers have been run"),
});

console.log("Leaving Subscriber");
