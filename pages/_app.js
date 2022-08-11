import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/login.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/langbar.css";
import "../styles/question.css";
import "../styles/homefirst.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/login.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/how.css";
import "../styles/restaurant.css";
import "../styles/langbar.css";
import "../styles/pagination.css";
import "../styles/profile.css";
import "../styles/checkout.css";
import "../styles/homefirst.scss";

import "../i18n";
import Layout from "../features/Layout/Layout";
import { store } from "../store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
