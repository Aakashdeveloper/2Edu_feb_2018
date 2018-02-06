import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component';
import { ProductComponent } from './products/products.component';


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent

    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}