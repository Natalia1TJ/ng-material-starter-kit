import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-checkbox-list',
  styleUrls: ['./category-checkbox-list.component.scss'],
  templateUrl: './category-checkbox-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCheckboxListComponent {
  readonly list$: Observable<ProductModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
