import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/login.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/how.css";
import "../styles/langbar.css";
import "../styles/homefirst.scss";
import "../i18n";

import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
