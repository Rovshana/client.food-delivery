import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/login.css'
import '../styles/footer.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/langbar.css'
import '../styles/homefirst.scss'
import "../i18n";
import Layout from '../features/Layout/Layout'




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />

    </Layout>
  )
  }
export default MyApp
