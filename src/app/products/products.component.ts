import {Component,OnInit} from '@angular/core';
import {IProduct} from './products'

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
    products:IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }, {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 2.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }]

        toggleImage():void{
            this.showImage = !this.showImage;
        }

        constructor(){}

        ngOnInit():void{
            console.log("<<<<<<<<<,hiiiiiiiiiiiii>>>>>>>>>")
        }
}

/*
oneway
--data {{}}
--property []
--event ()
twoway [()]
*/