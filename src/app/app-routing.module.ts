import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidaysListComponent } from './components/public-holidays-list/public-holidays-list.component';
import { CategoryCheckboxListComponent } from './components/category-checkbox-list/category-checkbox-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { PublicHolidaysListComponentModule } from './components/public-holidays-list/public-holidays-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoryCheckboxListComponentModule } from './components/category-checkbox-list/category-checkbox-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: PublicHolidaysListComponent }, { path: 'checkbox-categories', component: CategoryCheckboxListComponent }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoChipsServiceModule, PublicHolidaysListComponentModule, PublicHolidaysServiceModule, CategoryCheckboxListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
