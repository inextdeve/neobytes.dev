import PaypalButton from "../../../components/paypal-button";

const Page = () => {
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
            <ul className="space-y-5">
              <li className="flex justify-between">
                <div className="inline-flex">
                  <img
                    src="https://neobytes.network/wp-content/uploads/2023/12/work.png"
                    alt=""
                    className="max-h-16"
                  />
                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      eCommerce Website
                    </p>
                    <p className="text-sm font-medium text-white text-opacity-80">
                      One product eCommerce website
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">$4000.00</p>
              </li>
            </ul>
            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
            <div className="space-y-2">
              <p className="flex justify-between text-lg font-bold text-white">
                <span>Total price:</span>
                <span>$4200.00</span>
              </p>
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Vat: 10%</span>
                <span>$55.00</span>
              </p>
            </div>
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

export default Page;
