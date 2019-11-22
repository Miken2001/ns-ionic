import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'appinfo', loadChildren: './appinfo/appinfo.module#AppinfoPageModule' },
  { path: 'ses1', loadChildren: './ses1/ses1.module#Ses1PageModule' },
  { path: 'smp1', loadChildren: './smp1/smp1.module#Smp1PageModule' },
  { path: 'svt1', loadChildren: './svt1/svt1.module#Svt1PageModule' },
  { path: 'slla1', loadChildren: './slla1/slla1.module#Slla1PageModule' },
  { path: 'ses2', loadChildren: './ses2/ses2.module#Ses2PageModule' },
  { path: 'smp2', loadChildren: './smp2/smp2.module#Smp2PageModule' },
  { path: 'svt2', loadChildren: './svt2/svt2.module#Svt2PageModule' },
  { path: 'slla2', loadChildren: './slla2/slla2.module#Slla2PageModule' },
  { path: 'ses3', loadChildren: './ses3/ses3.module#Ses3PageModule' },
  { path: 'smp3', loadChildren: './smp3/smp3.module#Smp3PageModule' },
  { path: 'svt3', loadChildren: './svt3/svt3.module#Svt3PageModule' },
  { path: 'slla3', loadChildren: './slla3/slla3.module#Slla3PageModule' },
  { path: 'ses4', loadChildren: './ses4/ses4.module#Ses4PageModule' },
  { path: 'smp4', loadChildren: './smp4/smp4.module#Smp4PageModule' },
  { path: 'svt4', loadChildren: './svt4/svt4.module#Svt4PageModule' },
  { path: 'slla4', loadChildren: './slla4/slla4.module#Slla4PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
