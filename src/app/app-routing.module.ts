import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InformacionComponent} from './components/informacion/informacion.component';

const routes: Routes = [
    { path: '', component: BuscadorComponent},
    { path: 'informacion', component: InformacionComponent},
    { path: '**', pathMatch: 'full' , redirectTo:''}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}