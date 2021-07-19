interface ProductProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installmentValue?: number | null;
  installmentQuantity?: number | null;
}

export function storeSelectedProducts(selectedProducts: ProductProps[]) {
  localStorage.setItem('@corebizStore:selectedProducts', JSON.stringify(selectedProducts))
}

export function getSelectedProductsFromLocalStorage() {
  const storagedSelectedProducts = localStorage.getItem('@corebizStore:selectedProducts');
  if (storagedSelectedProducts) {
    return JSON.parse(storagedSelectedProducts);
  } else {
    return [];
  }
}
