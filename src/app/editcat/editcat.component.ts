import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../models/cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {
catForm: FormGroup;
catId: string;
cat: Cat;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private catsService: CatsService,
    private router: Router) {
      this.catForm=this.fb.group({
        'id': [''],
        'description':['']
      })
     }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.catId = params['id'];
      this.catsService.getCatById(this.catId).subscribe(res=>{
        this.cat = res
        this.catForm = this.fb.group({
          'id': [this.catId],
          'description':[this.cat.description]
        })
      })
    })
  }
editCat(){
  this.catsService.editCat(this.catForm.value).subscribe(res=>{
    this.router.navigate(['mycats'])
  })
}
}
