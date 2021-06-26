// import '../styles/globals.css';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Context from '../components/context';
import { getMemesByCategory } from '../helper';

function MyApp({ Component, pageProps }) {
    const [category, setCategory] = useState('category/funny');
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const suffle = async () => {
        setLoading(true);
        const resp = await getMemesByCategory(category, 1);
        setData(resp?.memes[0]);
        setLoading(false);
    };

    useEffect(() => {
        suffle();
    }, [category]);

    return (
        <Context.Provider value={{ category, setCategory, suffle, data, loading }}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}

export default MyApp;
