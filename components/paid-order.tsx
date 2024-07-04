import Link from "next/link";
import { Order } from "../types";
import moment from "moment";

const orderStatus = {
  PROCESSING:
    "is processing by our team. We will notify you by email once your order has been completed.",
  END: "is completed by our team. Thank you for your trust in us. this page will removed in 24hr.",
};

const PaidOrder = ({ order }: { order: Order }) => {
  if (order.payerInfo)
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 min-h-[90vh]">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            Your order{" "}
            <a
              href="#"
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              #{order.id}
            </a>{" "}
            {orderStatus[order.orderStatus]}
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Date
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {moment(order.updatedAt).format("DD-MM-YYYY")}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Payment Method
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {Object.keys(order.payerInfo.payment_source)[0].toUpperCase() ||
                  ""}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Name
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {`${order.payerInfo.payer.name.given_name} ${order.payerInfo.payer.name.surname}`}
              </dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Contact us
            </Link>
            <Link
              href="/"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Return to home page
            </Link>
          </div>
        </div>
      </section>
    );

  return (
    <div className="text-center">Error contact us as soon as possible.</div>
  );
};

export default PaidOrder;
