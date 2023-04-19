import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react"
import Layout from "../../components/Layout/Layout";

export default function App({ Component,pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
      return (
        <SessionProvider session={pageProps.session}>
          <Layout >
          <Component {...pageProps} />
        </Layout>
        </SessionProvider>
      )    
  }
}
