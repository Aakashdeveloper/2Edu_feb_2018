import {Component,OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service'

@Component({
    selector:'prod-app',
    templateUrl:'./products.component.html',
    //styles:['thead{color:red}','h3{color:green']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="*******PRODUCT LIST******************";
    showImage:boolean=false;
    listFilter:string;
    imageWidth:number=50;
    products:IProduct[];
    errorMessage:string;

        toggleImage():void{
            this.showImage = !this.showImage;
        }

        constructor(private _productService:ProductService){}

        ngOnInit():void{
            console.log("<<<<<<<<<,hiiiiiiiiiiiii>>>>>>>>>")
           this._productService.getProducts()
                .subscribe((products) =>this.products=products,
                        (error) => this.errorMessage=<any>error)
        }

        onRatingClicked(message:string):void{
            this. title="*******PRODUCT LIST******************"+message
        }
        
}

/*
oneway
--data {{}}
--property []
--event ()
twoway [()]
*/