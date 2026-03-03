const Cart = ({ cart }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    {cart.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} className="flex justify-between border-b py-2">
          <span>{item.name}</span>
          <span>Rs. {item.price}</span>
        </div>
      ))
    )}
  </div>
);
export default Cart;