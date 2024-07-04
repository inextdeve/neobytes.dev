import { cmsServer } from "../config/server";

const loader = ({ src }) => {
  // Define your custom loader
  return `http://38.60.249.19:1337${src}`;
};

class FetchError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

const confirmOrderPayment = async (id, confirmationPayload) => {
  try {
    const response = await fetch(`${cmsServer}/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPICMS_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          paid: true,
          orderStatus: "PROCESSING",
          payerInfo: confirmationPayload,
        },
      }),
    });
    if (!response.ok) return { error: "cannot confirm payment on CMS" };
  } catch (error) {
    console.log(error);
    return { error: "cannot confirm payment on CMS" };
  } finally {
    await fetch(`/api/revalidate?path=/order/${id}`);
  }
};

export { loader, FetchError, confirmOrderPayment };
