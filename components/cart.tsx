import { Order } from "../types";

const Cart = ({ order }: { order: Order }) => {
  return (
    <div className="relative">
      <ul className="space-y-5">
        {order.products?.map((product) => {
          return (
            <li className="flex justify-between">
              <div className="inline-flex">
                <img src={product.image} alt="" className="max-h-16" />
                <div className="ml-3">
                  <p className="text-base font-semibold text-white">
                    {product.name}
                  </p>
                  <p className="text-sm font-medium text-white text-opacity-80">
                    {product.description}
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold text-white">
                ${product.price}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
      <div className="space-y-2">
        <p className="flex justify-between text-lg font-bold text-white">
          <span>Total price:</span>
          <span>
            $
            {order.products.reduce((prev, curr) => {
              return prev + Number(curr.price);
            }, 0)}
          </span>
        </p>
        <p className="flex justify-between text-sm font-medium text-white">
          <span>Vat: 0%</span>
          <span>$0.00</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
