// import '../styles/globals.css';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Context from '../components/context';

function MyApp({ Component, pageProps }) {
    const [category, setCategory] = useState('funny');

    return (
        <Context.Provider value={{ category, setCategory }}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}

export default MyApp;
