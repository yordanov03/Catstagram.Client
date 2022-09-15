import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-listcats',
  templateUrl: './listcats.component.html',
  styleUrls: ['./listcats.component.css']
})
export class ListcatsComponent implements OnInit {
cats: Array<Cat>;
  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
    this.catsService.getCats().subscribe(cats=>{
      this.cats = cats
      console.log(cats);
    })
  }

}
