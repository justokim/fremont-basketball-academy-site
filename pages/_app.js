import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="flex flex-col flex-1 min-h-screen justify-between relative">
        <Navbar />
        <div className="flex-grow overflow-hidden pt-20 flex items-stretch">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
