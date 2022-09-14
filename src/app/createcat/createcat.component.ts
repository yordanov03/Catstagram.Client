import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrls: ['./createcat.component.css']
})
export class CreatecatComponent implements OnInit {
catForm: FormGroup;

  constructor(private fb: FormBuilder, private catsService: CatsService) {
    this.catForm = this.fb.group({
      'imageUrl':['', Validators.required],
      'description':['']
    })
   }

  ngOnInit(): void {
  }

  createCat(){
    this.catsService.createCat(this.catForm.value).subscribe(res=>{console.log(res)})
  }
get imageUrl(){
  return this.catForm.get('imageUrl')
}
}
