import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from 'src/app/interfaces/Location';
import { CharacterService } from 'src/app/services/character.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location$: Observable<Location> | undefined;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)).subscribe((params) => {
        const id = params['id'];
        this.location$ = this.characterService.getLocation(id);
        console.log(this.location$);
      })
  }

}

