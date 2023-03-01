// ./pages/_app.js

// import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import DefaultLayout from "../layouts/Default";
import { CartProvider } from "../modules/AppContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // Use at the root of our app
    <NextUIProvider>
      <CartProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </CartProvider>
    </NextUIProvider>
  );
}

export default MyApp;
