import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { BlogListPageComponent } from './pages/blog-list.page/blog-list.page.component';
import { BlogPostPageComponent } from './pages/blog-post.page/blog-post.page.component';
export const routes: Routes = [
  { path: "", component: HomeComponent },
  // Blog (listado)
  { path: 'blog', loadComponent: () => BlogListPageComponent},
  // Blog (detalle)
  { path: 'blog/:slug', loadComponent: () => BlogPostPageComponent},
  { path: "**", redirectTo: "" },
]
