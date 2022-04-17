import { forkJoin, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax("https://random-data-api.com/api/name/random_name");
const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation"
);
const randomFood$ = ajax("https://random-data-api.com/api/food/random_food");
