import { Routes } from '@angular/router';
import { KrishnaComponent } from './krishna/krishna.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalcComponent } from './calc/calc.component';

export const routes: Routes = [
    {
        path: 'home',
        component:KrishnaComponent
    },{
        path: 'about-us',
        component:AboutUsComponent
    },
    {
        path:'Connect-Us',
        component:ContactUsComponent
    },
    {
        path:'calculator',
        component:CalcComponent
    }
];
