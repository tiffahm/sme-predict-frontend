import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { AppState } from "../states/app.state";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private httpClient: HttpClient, private appState: AppState) {}

  async predict() {
    const d = [];
    const data = this.appState.allUserData();
    d.push(data);
    console.log(JSON.stringify(d));
    const requestObs = this.httpClient.get("http://localhost:8000/predict/", {
      params: {
        d: JSON.stringify(d)
      }
    });
    const r = await lastValueFrom(requestObs);
    // console.log(r)
    this.appState.clearUserData();
    return r;
  }
}
