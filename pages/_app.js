<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'
import '../styles/footer.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/langbar.css'
import '../styles/question.css'
import '../styles/homefirst.scss'
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/login.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/how.css";
import "../styles/langbar.css";
import "../styles/homefirst.scss";
>>>>>>> 364d84f142d9eebc56856a8ad96a6424a0bfb0f9
import "../i18n";
import Layout from '../features/Layout/Layout'

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

