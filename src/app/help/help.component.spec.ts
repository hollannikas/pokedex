import { TestBed, inject } from '@angular/core/testing';

import { HelpComponent } from './help.component';

describe('a help component', () => {
	let component: HelpComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HelpComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HelpComponent], (HelpComponent) => {
		component = HelpComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});