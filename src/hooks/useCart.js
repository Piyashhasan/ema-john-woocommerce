import { useEffect, useState } from "react";
import { getCartProductItem } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedItemInLocalStorage = getCartProductItem();
    const savedCart = [];
    for (const id in storedItemInLocalStorage) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedItemInLocalStorage[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
