import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OrdemDeCompraComponent } from './ordem-de-compra/ordem-de-compra.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'oferta', component: HomeComponent },
  {
    path: 'oferta/:id', component: OfertaComponent,
    children: [
      {
        path: '', component: ComoUsarComponent
      },
      {
        path: 'onde-fica', component: OndeFicaComponent
      },
      {
        path: 'como-usar', component: ComoUsarComponent
      },
    ]
  },
  {
    path: 'ordem-de-compra', component: OrdemDeCompraComponent
  },
];
