import { ICategory } from './types/category';
import { IEntity } from './types/entity';
import { IProduct } from './types/product';

export async function getEntity(): Promise<IEntity> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/test', options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

export async function getCategories(): Promise<Array<ICategory>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/test/categories', options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

export async function getBasket(): Promise<Array<IProduct>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/test/basket', options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

export async function getCategoryProducts(categoryName: string): Promise<Array<IProduct>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch(`api/test/products/${categoryName}`, options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}