import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashrouteService {
  public dashRoute = "";
  constructor() {
    this.dashRoute = "preferences";
  }
}
