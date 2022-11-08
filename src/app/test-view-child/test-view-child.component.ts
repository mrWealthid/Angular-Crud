import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, UntypedFormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-test-view-child',
    templateUrl: './test-view-child.component.html',
    styleUrls: ['./test-view-child.component.css']
})
export class TestViewChildComponent implements OnInit {
    title = "My View Child";
    data = data
    functions = new UntypedFormControl('', [Validators.required]);
    executeForm = this.fb.group({
        functions: this.functions,
        dynamicVals: this.fb.array([this.fb.control('')],)
    });

    constructor(protected fb: FormBuilder) {
    }

    get dynamicVals() {
        return this.executeForm.get('dynamicVals') as FormArray;
    }

    ngOnInit(): void {
    }

    addFields() {
        this.dynamicVals.push(this.fb.control(''));
    }
}

const data = [
    {id: 1, name: 'test'},
    {id: 2, name: 'testers'}
];