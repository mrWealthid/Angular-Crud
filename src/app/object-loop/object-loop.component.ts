import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-object-loop',
    templateUrl: './object-loop.component.html',
    styleUrls: ['./object-loop.component.css']
})
export class ObjectLoopComponent implements OnInit {
    response: Iresponse = response;
    testString = /nonReport/i;

    constructor() {
    }

    ngOnInit(): void {
    }
}

export interface Iresponse {
    //This is used for objects with dynamic keys
    [key: string]: IArray[];
}

export interface IArray {
    id: number,
    name: string,
    category: string,
    description: string,
    dbSprocName?: any,
    reportSql?: any,
    orgId: string,
    enabled: boolean,
    queable: boolean,
    requiresApproval: boolean,
    approvalTypeId?: any,
    functionType: string,
}

const response = {
    aeport: [
        {
            id: 1011,
            name: "Download Company Records",
            category: "USER",
            description: "Download company",
            dbSprocName: null,
            reportSql: "select * from comp where rownum <100",
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "REPORT",
        },
        {
            id: 1012,
            name: "MDA Collection Details",
            category: "REPORT",
            description: "Mda Report",
            dbSprocName: null,
            reportSql:
                "Select * from MDACOLLECTIONSDETAILS m  where 1=1 and rownum =1",
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "REPORT",
        },
    ],
    zontacted: [
        {
            id: 1011,
            name: "Download Company Records",
            category: "USER",
            description: "Download company",
            dbSprocName: null,
            reportSql: "select * from comp where rownum <100",
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "REPORT",
        },
        {
            id: 1012,
            name: "MDA Collection Details",
            category: "REPORT",
            description: "Mda Report",
            dbSprocName: null,
            reportSql:
                "Select * from MDACOLLECTIONSDETAILS m  where 1=1 and rownum =1",
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "REPORT",
        },
    ],
    nonReport: [
        {
            id: 1000,
            name: "DATA ERASURE PERSONAL - User with existing profile",
            category: "USER",
            description:
                "Treat data erasure requests from customers with Remita profiles",
            dbSprocName: "ADMINFXN.ADMINCONSOLE_CLEARRPDATA",
            reportSql: null,
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "SPROC",
        },
        {
            id: 1001,
            name: "SETUP OTP DELIVERY ROUTE",
            category: "USER",
            description: "SETUP OTP DELIVERY ROUTE",
            dbSprocName: "ADMINFXN.ADMINCONSOLE_ADJUSTOTP",
            reportSql: null,
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "SPROC",
        },
        {
            id: 1002,
            name: "UPDATE USERNAME",
            category: "USER",
            description: "UPDATE USERNAME",
            dbSprocName: "ADMINFXN.ADMINCONSOLE_SETIDTOUPPER",
            reportSql: null,
            orgId: "REMITA",
            enabled: true,
            queable: false,
            requiresApproval: false,
            approvalTypeId: null,
            functionType: "SPROC",
        },
    ],
};