import { ICategory } from './category';
import { IEntity } from './entity';

export interface IProduct extends IEntity {
    Price: string,
    PhotoId: string,
    Category: ICategory
    IsInBasket: boolean
}