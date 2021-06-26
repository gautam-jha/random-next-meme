import { useContext } from 'react';
import Context from './context';

function Sidebar() {
    const { category, setCategory } = useContext(Context);

    const categories = {
        memes: 'Memes',
        wholesomememes: 'Wholesome memes',
        dankmemes: 'Dank memes',
        historymemes: 'History memes',
        humour: 'Humour',
        comedyheaven: 'Funny',
        animememes: 'Anime',
        // hentai: 'Hentai', // research purposes only
        comic: 'Comic'
    };

    const country = {
        india: 'India'
    };

    return (
        <div className="sticky h-screen top-10 md:grid md:col-span-1 bg-white sm:overflow-x-auto mb-5 p-2">
            <h4 className="text-lg mt-4 hidden md:block">Categories</h4>
            {Object.entries({ ...categories }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setCategory(`category/${key}`);
                        }}
                        type="button"
                        className={`${
                            category.substr(category.indexOf('/') + 1) == key
                                ? 'bg-blue-700 text-white'
                                : 'bg-red-50'
                        } hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded m-1  whitespace-nowrap`}>
                        #{value}
                    </button>
                );
            })}
            {Object.entries({ ...country }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => setCategory(`country/${key}`)}
                        type="button"
                        className={`${
                            category.includes(key) ? 'bg-blue-700 text-white' : 'bg-red-50'
                        } hover:bg-blue-700 hover:text-white font-bold py-1 px-2 rounded m-1 whitespace-nowrap`}>
                        #{value}
                    </button>
                );
            })}
        </div>
    );
}

export default Sidebar;
