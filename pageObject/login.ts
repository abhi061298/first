import { Page } from "@playwright/test";


 export class Login {
    page: Page;
  


    constructor (page :Page){
        this.page =page
    }
    async m1(){
       await  this.page
        console.log('abhi');
    }
}