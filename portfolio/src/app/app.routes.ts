import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'projects',
  //   loadComponent: () => import('./pages/projects/projects.page').then(m => m.ProjectsPage)
  // },
  // {
  //   path: 'experiences',
  //   loadComponent: () => import('./pages/experiences/experiences.page').then(m => m.ExperiencesPage)
  // },
  // {
  //   path: 'education',
  //   loadComponent: () => import('./pages/education/education.page').then(m => m.EducationPage)
  // },
];
