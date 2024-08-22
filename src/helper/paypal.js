const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;

// for reference: 
// https://developer.paypal.com/docs/api/orders/v2/
// https://developer.paypal.com/sdk/js/reference/#createorder

const baseURL = {
  sandbox: "https://api-m.paypal.com",
  production: "https://api-m.paypal.com"
};

async function generateAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_SECRET).toString("base64");

  try {
    const response = await fetch(`${baseURL.production}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error);
  
    return data.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createPaypalOrder(total, invoiceId, billingAddress) {
  const accessToken = await generateAccessToken();
  const url = `${baseURL.production}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total,
          },
          invoice_id: invoiceId
        },
      ],
      payment_source: {
        paypal: {
          address: {
            address_line_1: billingAddress.address,
            address_line_2: billingAddress.address2,
            admin_area_2: billingAddress.city,
            admin_area_1: billingAddress.state,
            postal_code: billingAddress.zipCode,
            country_code: 'US',
          }
        }
      }
    }),
  });

  const data = await response.json();
  return data;
}

export async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${baseURL.production}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log("capture data", data)
  return data;
}
