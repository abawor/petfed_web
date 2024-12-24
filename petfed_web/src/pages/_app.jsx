import { Provider } from 'react-redux';
import store from '../redux/store';
import PropTypes from "prop-types";
import "../Global.css"
import Layout from './Layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object,
  };
