import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AppState{
    private _userdata: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])
    constructor(){

    }
    appendUserData(data: number){
        this._userdata.value.push(data)
        this._userdata.next(this._userdata.value)
    }
    allUserData(){
        return this._userdata.value
    }
    clearUserData(){
        this._userdata.next([])
        return []
    }
}