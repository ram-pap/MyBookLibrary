import {Injectable } from '@angular/core'
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http'
import { SpinnerService } from '../service/spinner/spinner.service';
import {tap} from 'rxjs/operators'


@Injectable()
export class RequestInterceptor implements HttpInterceptor{

    constructor(private spinnerService: SpinnerService){

    }
    intercept(request: HttpRequest<any>,next:HttpHandler){
        console.log("Request Interceptor..")
        this.spinnerService.requestStarted();       
        return this.handler(next,request);
    }
    handler(next,request){
        return next.handle(request).pipe(
          tap((event) =>{
                if(event instanceof HttpResponse){
                    console.log("request ended....")
                    console.log(event.body);
                    this.spinnerService.requestEnded();
                }
            },
            (error: HttpErrorResponse)=>{
                this.spinnerService.resetSpinner();
                throw error;
            })  
        )
    }
}
