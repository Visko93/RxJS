import { forkJoin, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax("https://random-data-api.com/api/name/random_name");
const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation"
);
const randomFood$ = ajax("https://random-data-api.com/api/food/random_food");

// forkJoin([randomFood$,  randomName$, randomnation$])

// randomName$.subscribe((ajaxresponse: any) =>
//   console.log(ajaxresponse.response.first_name)
// );
// randomNation$.subscribe((ajaxresponse: any) =>
//   console.log(ajaxresponse.response.capital)
// );
// randomFood$.subscribe((ajaxresponse: any) =>
//   console.log(ajaxresponse.response.dish)
// );

forkJoin<any>([randomFood$, randomName$, randomNation$]).subscribe({
  next: ([foodAjax, nameAjax, nationAjax]) => {
    const name = nameAjax.response.first_name;
    const nation = nationAjax.response.capital;
    const food = foodAjax.response.dish;
    console.log(`${name} is from ${nation} and likes to eat ${food}`);
  },
  error: (error) => console.log(error),
  complete: () => console.log("Completed"),
});
