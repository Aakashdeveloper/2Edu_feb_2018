import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetail implements OnInit{
    ProductId:string;
    name:string;
    imgUrl:string;
    desc:string;
    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id']
        this.ProductId = `ProductId : ${id}`

        this._route
            .queryParams
            .subscribe(params=>{
                this.name=params['name'];
                this.imgUrl=params['img'];
                this.desc=params['desc']
            })
    }
    onBack():void{
        this._router.navigate(['/products'])
    }
}