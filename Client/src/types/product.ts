import { ICategory } from './category';
import { IEntity } from './entity';

/** Товар. */
export interface IProduct extends IEntity {
  /** Цена. */
  Price: string;
  PhotoId: string;
  Category: ICategory;
  IsInBasket: boolean;
}