import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Cat } from '../models/cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-catdetails',
  templateUrl: './catdetails.component.html',
  styleUrls: ['./catdetails.component.css']
})
export class CatdeatilsComponent implements OnInit {
  id: string;
  cat: Cat;
    constructor(private route: ActivatedRoute,
      private catsService: CatsService) {
      // this.route.params.subscribe(res=>{
      //   this.id = res['id'];
      //   this.catsService.getCatById(this.id).subscribe(res=>{
      //       this.cat = res
      //   })
      // })
      this.fetchData()
     }

  fetchData(){
    this.route.params.pipe(map(params=>{
      const id = params['id'];
      return id;
    }), mergeMap(id=>this.catsService.getCatById(id))).subscribe(res=>{
      this.cat = res;
    })
  }
  
    ngOnInit(): void {
    }
}
