import {RouterModule, Routes } from '@angular/router';
import { CmpListamemeComponent } from './cmp-listameme/cmp-listameme.component';
import { CmpFormComponent } from './cmp-form/cmp-form.component';

const MEME_ROUTE = [
    {path: '', redirectTo: 'formMeme', pathMatch: 'full'},
    {path: 'listaMeme', component: CmpListamemeComponent},
    {path: 'formMeme', component: CmpFormComponent},
];


export const Routing = RouterModule.forRoot(MEME_ROUTE);
