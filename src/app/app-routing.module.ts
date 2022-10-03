import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { BookingComponent } from './components/booking/booking.component';
import { DealsComponent } from './components/deals/deals.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthAdminGuard } from './auth/auth-admin.guard';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', redirectTo: ''},
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-menu', component: AdminComponent, canActivate:[AuthAdminGuard] },
  { path: 'admin-order', component: AdminOrderComponent, canActivate:[AuthAdminGuard] },
  { path: 'mypage', component: MyDashboardComponent },
  { path: 'thankyou', component: ThankyouComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
