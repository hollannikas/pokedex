import { TestBed, inject } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';

describe('a pokemon component', () => {
	let component: PokemonComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PokemonComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PokemonComponent], (PokemonComponent) => {
		component = PokemonComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});