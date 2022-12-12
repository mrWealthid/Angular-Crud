import {Injectable} from "@angular/core";
import {createEffect} from "@ngrx/effects";
import {fromEvent, map} from "rxjs";
import * as NetworkActions from "./actions";

@Injectable()
export class NetworkEffect {
    offline$ = createEffect(() =>
        fromEvent(window, 'offline').pipe(
            map(_ =>
                NetworkActions.offline()
            ),
        ), {dispatch: true}
    );
    online$ = createEffect(() =>
        fromEvent(window, 'online').pipe(
            map(_ => NetworkActions.online()),
        ), {dispatch: true}
    );

    constructor() {
    }
}