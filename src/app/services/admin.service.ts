import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../Models/Plan';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url = 'https://localhost:7103/api/';
  private planUrl = this.url + 'Plans';
  private routeUrl = this.url + 'Route';
  private busesUrl = this.url + 'Buses';

  constructor(private httpClient: HttpClient) {}

  getPlans(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(this.planUrl + '/all');
  }

  addPlan(plan: any): Observable<any> {
    return this.httpClient.post(this.planUrl + '/addPlan', plan);
  }

  deletePlan(id: number): Observable<any> {
    return this.httpClient.delete(this.planUrl + '/delete/' + id);
  }

  getPlanById(id: number): Observable<Plan> {
    return this.httpClient.get<Plan>(this.planUrl + `/${id}`);
  }

  updatePlan(plan: any): Observable<any> {
    return this.httpClient.patch(this.planUrl + '/update/' + plan.id, plan);
  }

  getRoutes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.routeUrl);
  }

  getBuses(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.busesUrl);
  }
}
