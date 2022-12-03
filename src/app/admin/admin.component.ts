import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    testForm: FormGroup;
    select: FormControl;
    data: any = [];
    dropDown: any;
    data3: {
        airtimeForm: false;
        transferForm: false;
    };

    constructor() {
    }

    ngOnInit(): void {
        this.select = new FormControl<any>("", Validators.required);
        // this.cont = new FormControl<any>('', Validators.required);
        this.testForm = new FormGroup<any>({
            select: this.select
        });
    }

    handleChange(e: any) {
        // console.log(e.target.value);
        const id = e.target.value;
        this.data = [{
            id: 1111, paramType: 'LOV', data: [{}]
        }, {
            id: 1511, paramType: 'LOV', data: [{}]
        },
            {id: 2222, paramType: 'text'}, {
                id: 5555, paramType: "number"
            }
        ];
    }

    getParamVals(paramId: any) {
        console.log(paramId, this.select.value);
        this.dropDown = [{
            key: "Fresh", value: "22"
        }, {key: "Fres", value: "24"}, {key: "Fies", value: "26"}];
// document.querySelector(`.${paramId}`).innerHTML =this.dropDown.map((item)=>  `return `
//
//
//    <option value=""> {{item.value}}</option>`
//             `
//         })
//
        // const options = document.querySelector("");
    }
}