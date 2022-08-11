import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    form: FormGroup;
    title: FormControl;
    content: FormControl;

    constructor() {
    }

    ngOnInit(): void {
        this.title = new FormControl<any>("");
        this.content = new FormControl<any>('');
        this.form = new FormGroup<any>({
            title: this.title,
            content: this.content
        });
    }

    submitValues(val: any) {
        console.log(val);
    }
}