import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Header, Meme, Footer } from '../components';
import { fetcher, getSingleMemes } from '../helper';

// export async function
export default function Random({ initalMemes: meme }) {
    const [data, setData] = useState(meme);
    const [loading, setLoading] = useState(false);

    const suffle = async () => {
        setLoading(true);
        const resp = await getSingleMemes();
        setData(resp);
        setLoading(false);
    };

    return (
        <div className="bg-blue-50">
            <Head>
                <title>About - Random Memes</title>
                <meta name="description" content="Random Memes by Gauti." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto px-4 mt-10">
                <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="sm:col-span-3 md:col-span-1 bg-white hidden md:block pl-5">
                        <h4 className="text-lg mt-4 mb-2">Mode</h4>
                        <div className="flex m-2">
                            <Link href="/random">
                                <button
                                    type="button"
                                    className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-gray-200   bg-gray-100   text-gray-700  border duration-200 ease-in-out transition">
                                    <div className="flex leading-5">Random</div>
                                </button>
                            </Link>
                            <Link href="/">
                                <button
                                    type="button"
                                    className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200  bg-teal-100 border duration-200 ease-in-out text-teal-700 border-teal-600 transition">
                                    <div className="flex leading-5">Infinite</div>
                                </button>
                            </Link>
                        </div>
                        <h4 className="text-lg mt-4 mb-2">Categories</h4>
                        <p>Wholesomememes</p>
                        <p>Funny</p>
                        <p>Dankmemes</p>
                        <p>Darkmemes</p>
                        <p>Humour</p>
                    </div>
                    <div className="col-span-2">
                        <Meme data={data} key={data?.ups} loading={loading} />
                        <div className="flex mb-10 justify-center">
                            <button
                                type="button"
                                onClick={() => suffle()}
                                className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-gray-200   bg-gray-100   text-gray-700  border duration-200 ease-in-out  border-gray-600 transition">
                                <div className="flex leading-5">
                                    <img
                                        alt="random memes"
                                        width="20"
                                        height="20"
                                        className="mr-3"
                                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzEiPjxwYXRoIGQ9Ik05LjQ2NSwzNy45NWw4LjI0Mi04LjI0M2wtMS40MTQtMS40MTRsLTguMjQyLDguMjQyQzcuMTA1LDM3LjQ4LDUuODUsMzgsNC41MTUsMzhIMXYyaDMuNTE1ICAgQzYuMzg0LDQwLDguMTQyLDM5LjI3Miw5LjQ2NSwzNy45NXoiLz48cGF0aCBkPSJNMzIuNTM1LDEyLjA1bC04LjI0Miw4LjI0M2wxLjQxNCwxLjQxNGw4LjI0Mi04LjI0MkMzNC44OTUsMTIuNTIsMzYuMTUsMTIsMzcuNDg1LDEyaDYuMTAxbC00LjI5Myw0LjI5M2wxLjQxNCwxLjQxNCAgIEw0Ny40MTQsMTFsLTYuNzA3LTYuNzA3bC0xLjQxNCwxLjQxNEw0My41ODYsMTBoLTYuMTAxQzM1LjYxNiwxMCwzMy44NTgsMTAuNzI4LDMyLjUzNSwxMi4wNXoiLz48cGF0aCBkPSJNOC4wNTEsMTMuNDY0TDMyLjUzNSwzNy45NWMxLjMyMywxLjMyMiwzLjA4MSwyLjA1LDQuOTUsMi4wNWg2LjEwMWwtNC4yOTMsNC4yOTNsMS40MTQsMS40MTRMNDcuNDE0LDM5bC02LjcwNy02LjcwNyAgIGwtMS40MTQsMS40MTRMNDMuNTg2LDM4aC02LjEwMWMtMS4zMzUsMC0yLjU5MS0wLjUyLTMuNTM2LTEuNDY0TDkuNDY1LDEyLjA1QzguMTQyLDEwLjcyOCw2LjM4NCwxMCw0LjUxNSwxMEgxdjJoMy41MTUgICBDNS44NSwxMiw3LjEwNSwxMi41Miw4LjA1MSwxMy40NjR6Ii8+PC9nPjxnLz48L3N2Zz4="
                                    />
                                    Next.Meme!
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetcher('https://meme-api.herokuapp.com/gimme');

    return {
        props: { initalMemes: data },
        revalidate: 5
    };
}
