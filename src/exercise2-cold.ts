import { ajax } from "rxjs/ajax";

const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");

ajax$.subscribe({
  next: (value) => console.log("Sub 1: ", value.response),
});

ajax$.subscribe({
  next: (value) => console.log("Sub 2: ", value.response),
});

ajax$.subscribe({
  next: (value) => console.log("Sub 3: ", value.response),
});
