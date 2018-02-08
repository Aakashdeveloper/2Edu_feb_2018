import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component';
import { ProductComponent } from './products/products.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductFilter,
        StarComponent

    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}