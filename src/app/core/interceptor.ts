import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

    public getResponseText: any;
    public getValidationText: any;
    constructor(

    ) {


    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // add authorization header with token if available


        //   if (token) {
        request = request.clone({
            setHeaders: {
                // Authorization: `Bearer ${token}`,
            }
        });
        //   }

        console.log("Request")
        return next.handle(request)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log("response : ", event)
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    console.log("response Err : ", err)
                }
            }
            ));

    }

}
