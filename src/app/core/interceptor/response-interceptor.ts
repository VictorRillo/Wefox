import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        //TODO: Servicio muestra error por pantalla
        return this.handleError(err);
      }));
  }

  handleError(err: any): Observable<never> {
    console.log(err);
    return throwError(err);
  }
}

export const responseHttpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
]
