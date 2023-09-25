import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { concatMap, map, tap, toArray } from "rxjs/operators";

export interface Translations<T = string | Spanish> {
    next: string;
    previous: string;
    translations: Languages<T>[];
}

export interface Languages<T = string | Spanish> {
    name: string;
    spa: T[];
}

export interface Spanish {
    common: string;
}

@Injectable({
    providedIn: "root",
})

export class ListaService {
    private readonly baseURL = "https://restcountries.com/v3.1/all";

    spa$ = (language: Languages) =>
        of(language.spa).pipe(
            tap((i) => (language.spa = i)),
            map(() => language)
            
    );
    
    language$ = (language: Languages[]) => of(language).pipe(
        concatMap((i) => i),
        concatMap((i) => this.spa$(i)),
        toArray()
    );

    data = new BehaviorSubject<string>(this.baseURL);
    data$ = this.data.pipe(
        concatMap((url) => this.http.get<Translations>(url)),
        concatMap((result) => this.language$(result.translations).pipe(
            map<any, Translations<Spanish>>(() => <Translations<Spanish>>result)
        )
        )
    );

    constructor(private http: HttpClient) { }

    go(url?: string) {
        this.data.next(url || this.baseURL);
    }
}
