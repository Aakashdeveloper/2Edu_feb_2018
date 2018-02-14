import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {CarComponent} from './car.component';
import { ProductComponent } from './products/products.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { ProductDetail } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFound } from './shared/notFound.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { ProductGaurds } from './products/products.gaurds';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductGaurds],component:ProductDetail},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound}
        ])
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductFilter,
        StarComponent,
        OrderComponent,
        ProductDetail,
        HomeComponent,
        NotFound,
        RoboticsComponent

    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService,
        ProductGaurds
    ]
})

export class AppModule{

}