import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatsService } from '../services/cats.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrls: ['./createcat.component.css']
})
export class CreatecatComponent implements OnInit {
catForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private catsService: CatsService,
    private toastrService: ToastrService) {
    this.catForm = this.fb.group({
      'imageUrl':['', Validators.required],
      'description':['']
    })
   }

  ngOnInit(): void {
  }

  createCat(){
    this.catsService.createCat(this.catForm.value).subscribe(res=>{console.log(res)})
    this.toastrService.success("Wohoo");
  }
get imageUrl(){
  return this.catForm.get('imageUrl')
}
}
