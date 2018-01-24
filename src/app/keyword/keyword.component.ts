import { Component, OnInit,Input } from '@angular/core';
import {Keyword} from '../models/keyword.model';
import { ActivatedRoute,Router} from '@angular/router';
import {KeywordService} from '../services/keyword.service';

@Component({
selector:'app-keyword',
templateUrl:'./keyword.component.html',
styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
@Input() keyword:Keyword;
constructor(private keywordService:KeywordService,
private activateRoute:ActivatedRoute,
private myRoute:Router) { }

ngOnInit() {
}
Display(){
this.myRoute.navigateByUrl('/DisplayImage()');
  }

}
