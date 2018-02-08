import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component';
import { ProductComponent } from './products/products.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
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