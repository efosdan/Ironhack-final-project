import React, { useState, useEffect } from "react";
import "./CartStyles.css";

function Cart({ cart, setCart, handleChange, c }) {
  const [price, setPrice] = useState(0);
  const [displayPrices, setDisplayPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let i = 0;
    cart.map((product) => (i += product.qty * product.price));
    setPrice(i);
  };

  useEffect(() => {
    handlePrice();
  }, []);

  useEffect(() => {
    const listOfPrices = cart.map((product) => {
      return { displayPrice: product.price * product.qty };
    });
    const sumOfList = cart
      .map((product) => product.qty * product.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    setDisplayPrices(listOfPrices);
    setTotalPrice(sumOfList);
  }, [cart]);

  return (
    <article>
      {cart.map((product, index) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={product.img} alt="" />
            <p>{product.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button> {product.qty} </button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>
              ${" "}
              {displayPrices.length !== 0 && displayPrices[index].displayPrice}
            </span>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price Of Your Cart</span>
        <span>$ {totalPrice}</span>

        <div>
          <form
            method="POST"
            action="https://checkout.flutterwave.com/v3/hosted/pay"
          >
            <div> </div>
            <input
              type="hidden"
              name="public_key"
              value="FLWPUBK_TEST-SANDBOXDEMOKEY-X"
            />
            <input
              type="hidden"
              name="customer[email]"
              value="order@pastavila.com"
            />
            <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
            <input type="hidden" name="tx_ref" value="bitethtx-019203" />
            <input type="hidden" name="amount" value={totalPrice} />
            <input type="hidden" name="currency" value="USD" />
            <input type="hidden" name="meta[token]" value="54" />
            <input type="hidden" name="redirect_url" value="" />
            <button type="submit" id="start-payment-button">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default Cart;
