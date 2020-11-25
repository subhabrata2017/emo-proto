import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'child-tree',
        loadChildren: () => import('./child-tree/child-tree.module').then(m => m.ChildTreePageModule)
    },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
