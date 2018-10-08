import { Component  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { Hero } from '../../classes/hero';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
    animations: [routerTransition()]
})
export class TestFormComponent   {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit(form: NgForm) {
         let name = form.value.name;
        //log.info(name);
        //this.model.name;
        this.submitted = true;
    }

    newHero() {
        this.model = new Hero(42, '', '');
    }


}
