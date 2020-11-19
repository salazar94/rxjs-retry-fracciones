import { of } from "rxjs";
import { map, retry } from "rxjs/operators";

const source = of("World").pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);
