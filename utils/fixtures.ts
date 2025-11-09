// import {test as base }from '@playwright/test';
// import { Login } from '../pageObject/login';

// const test = base.extend<{login:Login}>

// login : async ({page},use)=>{
//     const login = new Login(page);
//     await use (login)

// }
import { test as base } from '@playwright/test';
import { Login } from '../pageObject/login';
import { Logout } from '../pageObject/logout';

const test = base.extend<{ 
    login: Login;
    logout :Logout

}>
({
 login :async({page },use ) =>{

   const  login = new Login(page);
   await use(login)
 },
logout:async({page},use)=>{
    const logout = new Logout ();
    await use(logout)
},

});

export { test };
