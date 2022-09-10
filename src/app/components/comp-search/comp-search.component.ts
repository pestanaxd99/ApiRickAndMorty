import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-search',
  template: `
  <input
    #inputSearch
    autofocus
    type="text"
    class="form-control-lg"
    placeholder="Please type any word"
    (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styleUrls: ['./comp-search.component.scss']
})
export class CompSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    if(value && value.length>3){
      this.router.navigate(['character-list'],{
        queryParams: {query: value}
      })
    }
  }
}
