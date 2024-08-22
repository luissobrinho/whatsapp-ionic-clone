import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full',
  },
  {
    path: 'authorization',
    loadComponent: () => import('./pages/authorization/authorization.page').then( m => m.AuthorizationPage)
  },
  {
    path: 'chats',
    loadComponent: () => import('./pages/chats/chats.page').then( m => m.ChatsPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
];
