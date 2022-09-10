import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/Character';
import { CharacterService } from 'src/app/services/character.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)).subscribe((params) => {
        const id = params['id'];
        this.character$ = this.characterService.getDetails(id);
      })
  }

}
