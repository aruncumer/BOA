import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EnvironmentConfig, ENV_CONFIG } from 'env/environmenter.token';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()

export class UploadService {
     public apiUrl: string;
     public envi: string;

     constructor(
          private http: HttpClient,
          @Inject(ENV_CONFIG)
          private endpoint: EnvironmentConfig
     ) { }

     public getUpload(formData: FormData): Observable<any[]> {
          return this.http.post<any[]>(this.endpoint.mockApiServer, formData).pipe(
               tap(data => data)
          );
     }

     private handleError(err: HttpErrorResponse) {
          let errorMessage: string;
          if (err.error instanceof ErrorEvent) {
               errorMessage = `An error occurred: ${err.error.message}`;
          } else {
               errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
          }
          return throwError(errorMessage);
     }
}