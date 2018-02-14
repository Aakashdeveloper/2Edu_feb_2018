import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {IProduct} from './products';

@Injectable()

export class ProductService{

    private _productUrl ="https://ngapi4.herokuapp.com/api/getProducts";

    constructor(private _http:Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .map((response:Response)=> <IProduct[]> response.json())
                .catch(this.handleError)
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText||"Server Error")
    }
}