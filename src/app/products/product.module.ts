import { NgModule} from '@angular/core';
import { ProductComponent } from './products.component';
import { ProductFilter } from './product-filter.pipe';
import { ProductDetail } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductGaurds } from './products.gaurds';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductGaurds],component:ProductDetail}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductFilter,
        ProductDetail,
    ],
    providers:[
        ProductService,
        ProductGaurds
    ]
})

export class ProductModule{}