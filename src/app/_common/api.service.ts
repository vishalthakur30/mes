import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(
		private httpClient: HttpClient
	) { }

	get(url: string, params?: any): Observable<any> {
		return this.httpClient.get(`${url}`, { params: params });
	}

	post(url: string, param?: any): Observable<any> {
		return this.httpClient.post(`${url}`, param);
	}

	put(url: string, data?: any): Observable<any> {
		return this.httpClient.put(`${url}`, data);
	}

	patch(url: string, data?: any): Observable<any> {
		return this.httpClient.patch(`${url}`, data);
	}

	delete(url: string, data?: any): Observable<any> {
		return this.httpClient.delete(`${url}`, data);
	}

}
