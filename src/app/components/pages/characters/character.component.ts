import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from '../../../interfaces/Character';

@Component({
    selector: 'app-character',
    template: `
    <div class="card">
        <div class="image">
            <a [routerLink]="['/character-details', character.id]">
                <img 
                [src]="character.image" 
                [alt]="character.name" 
                class="card-img-top"
                >
            </a>
        </div>
        <div class="card-inner">
            <div class="header">
                <a [routerLink]="['/character-details', character.id]">
                    <h2>{{character.name}}</h2>
                </a>
                <h6 class="text-muted">Gender: <strong>{{character.gender}}</strong></h6>
                <h6 class="text-muted">Status: <strong>{{character.status}}</strong></h6>
                <h6 class="text-muted">Specie: <strong>{{character.species}}</strong></h6>
                <h6 class="text-muted">Last location: <strong>{{character.location.name}}</strong></h6>
                <small class="text-muted">Date created: <strong>{{character.created | date}}</strong></small>
            </div>
        </div>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input()character: Character;
}