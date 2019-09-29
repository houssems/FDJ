import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .get<T>(url, options)
      .pipe(catchError((err: HttpErrorResponse) => this.handleHttpError<T>(err)));
  }

  public post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .post<T>(url, body, options)
      .pipe(catchError((err: HttpErrorResponse) => this.handleHttpError<T>(err)));
  }

  public put<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .put<T>(url, body, options)
      .pipe(catchError((err: HttpErrorResponse) => this.handleHttpError<T>(err)));
  }


  public patch<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient
      .patch<T>(url, body, options)
      .pipe(catchError((err: HttpErrorResponse) => this.handleHttpError<T>(err)));
  }


  public delete<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.httpClient
      .delete<T>(url, options).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleHttpError<T>(err);
      }));
  }


  private handleHttpError<T>(err: HttpErrorResponse): Observable<T> {

    return throwError(err);
  }
}
