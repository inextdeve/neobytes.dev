import Cart from "../../../components/cart";
import PaidOrder from "../../../components/paid-order";
import PaypalButton from "../../../components/paypal-button";
import { Order } from "../../../types";

const orders: Order[] = [
  {
    id: "1",
    products: [
      {
        name: "eCommerce website",
        image: "https://neobytes.network/wp-content/uploads/2023/12/work.png",
        description: "One product eCommerce website",
        price: "2000.00",
        currency: "USD",
      },
      {
        name: "Event management site",
        image: "https://neobytes.network/wp-content/uploads/2023/12/work.png",
        description: "Platform for event planning and ticketing",
        price: "4000.00",
        currency: "USD",
      },
    ],
    paid: false,
    orderStatus: "PENDING",
  },
  {
    id: "2",
    products: [
      {
        name: "Real estate website",
        image: "https://neobytes.network/wp-content/uploads/2023/12/work.png",
        description: "Property listing and management system",
        price: "5500.00",
        currency: "USD",
      },
      {
        name: "News portal",
        image: "https://neobytes.network/wp-content/uploads/2023/12/work.png",
        description: "News and article publishing platform",
        price: "4500.00",
        currency: "USD",
      },
    ],
    paid: true,
    payment: {
      date: new Date("14 May 2024"),
      method: "PayPal",
      name: "Jhon Smith",
    },
    orderStatus: "PROCESSING",
  },
];

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  return orders.map((order) => ({
    id: order.id,
  }));
}

async function getOrder(id: string) {
  // const res = await fetch('https://api.example.com/...')
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return res.json()
  return orders[Number(id) - 1];
}

const Page = async ({ params }: { params: { id: string } }) => {
  const order = await getOrder(params.id);
  if (order.paid) {
    return <PaidOrder order={order} />;
  }
  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-gradient sm:w-20"></span>
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Leave a note
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="*Optional"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
            <p className="my-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a href="#" className="whitespace-nowrap text-gradient underline">
                Terms and Conditions
              </a>
            </p>
            {/* <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg bg-gradient"
            >
              Place Order
            </button> */}
            <PaypalButton />
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Order summary</h2>
          <div>
            <img
              src="https://neobytes.network/wp-content/uploads/2023/12/work.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient from-teal-800 to-teal-400 opacity-95"></div>
          </div>
          <div className="relative">
            <Cart order={order} />
          </div>
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold">Support</h3>
            <p className="text-sm font-semibold">
              +995 568653441 <span className="font-light">(International)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              support@neobytes.dev <span className="font-light">(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">
              Call us now for payment related issues
            </p>
          </div>
          <div className="relative mt-10 flex">
            <p className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Money Back Guarantee
              </span>
              <span className="text-xs font-medium text-white">
                within 30 days of purchase
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const dynamicParams = false;
export default Page;
