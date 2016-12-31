import {Component} from '@angular/core';

//Each component needs a selector and template/templateURL
@Component({
    //finds custom HTML element and apply component to it
    selector: 'app',
    template: '<h1>My App</h1>'
})

export class AppComponent{}