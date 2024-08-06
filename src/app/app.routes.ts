import { Routes } from '@angular/router';
import { CoinsPageComponent } from 'pages/coins-page/coins-page.component';
import { ConverterPageComponent } from 'pages/converter-page/converter-page.component';
import { HistoryPageComponent } from 'pages/history-page/history-page.component';
import { HomePageComponent } from 'pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Convertix',
  },
  {
    path: 'moedas',
    component: CoinsPageComponent,
    title: 'Moedas | Convertix',
  },
  {
    path: 'conversor',
    component: ConverterPageComponent,
    title: 'Conversor | Convertix',
  },
  {
    path: 'historico',
    component: HistoryPageComponent,
    title: 'Histórico | Convertix',
  },
];
