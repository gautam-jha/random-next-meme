import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Header, Meme, Footer } from '../components';
import { fetcher, getMemes } from '../helper';

// export async function
export default function Home({ initalMemes }) {
    const [hasMore] = useState(true);
    const [memes, setMemes] = useState(initalMemes);

    return (
        <div className="bg-blue-50">
            <Head>
                <title>Random Memes</title>
                <meta name="description" content="Random Memes by Gauti." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="container mx-auto px-4 pt-10">
                <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="sm:col-span-3 md:col-span-1 bg-white hidden md:block pl-5">
                        <h4 className="text-lg mt-4 mb-2">Mode</h4>
                        <div className="flex m-2">
                            <Link href="/random">
                                <button
                                    type="button"
                                    className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200  bg-teal-100 border duration-200 ease-in-out text-teal-700 transition">
                                    <div className="flex leading-5">Random</div>
                                </button>
                            </Link>
                            <Link href="/">
                                <button
                                    type="button"
                                    className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-gray-200   bg-gray-100   text-gray-700  border duration-200 ease-in-out  transition">
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
                        {/* {error && <div>Failed to load meme</div>} */}
                        {memes ? (
                            <InfiniteScroll
                                dataLength={memes.length + 5}
                                next={() => getMemes(4, { memes, setMemes })}
                                hasMore={hasMore}
                                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"
                                loader={
                                    <h3>
                                        <img
                                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzIyMkEzMDt9Cgkuc3Qxe2ZpbGw6Izg2ODY4Nzt9Cgkuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzIyMkEzMDtzdHJva2U6IzIyMkEzMDtzdHJva2Utd2lkdGg6MC43NzY7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMyMjJBMzA7ZmlsbC1vcGFjaXR5OjA7c3Ryb2tlOiMyMjJBMzA7c3Ryb2tlLXdpZHRoOjAuNzc2O30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTojMjIyQTMwO3N0cm9rZS13aWR0aDoxLjU1NTY7c3Ryb2tlLW9wYWNpdHk6MC41O30KCS5zdDV7ZmlsbDpub25lO3N0cm9rZTojMjIyQTMwO3N0cm9rZS13aWR0aDoxLjU1NTY7fQoJLnN0NntmaWxsOiMwNzA3MDc7fQo8L3N0eWxlPjxnIGlkPSJkb3RfeDVGX2NpcmNsZV94NUZfc3Bpbm5lcl94NUZfOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAxKSI+PGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iMjUuNCIgY3k9IjE1IiByPSIyLjYiPjxhbmltYXRlIGFjY3VtdWxhdGU9Im5vbmUiIGFkZGl0aXZlPSJyZXBsYWNlIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwcyIgY2FsY01vZGU9ImxpbmVhciIgZHVyPSIxLjNzIiBmaWxsPSJyZW1vdmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiByZXN0YXJ0PSJhbHdheXMiIHZhbHVlcz0iMTswOzA7MDswOzA7MDswIi8+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMjIuMSIgY3k9IjIzLjEiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzE7MDswOzA7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNCIgY3k9IjI2LjQiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MTswOzA7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI1LjkiIGN5PSIyMy4xIiByPSIyLjYiPjxhbmltYXRlIGFjY3VtdWxhdGU9Im5vbmUiIGFkZGl0aXZlPSJyZXBsYWNlIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwcyIgY2FsY01vZGU9ImxpbmVhciIgZHVyPSIxLjNzIiBmaWxsPSJyZW1vdmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiByZXN0YXJ0PSJhbHdheXMiIHZhbHVlcz0iMDswOzA7MTswOzA7MDswIi8+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMi42IiBjeT0iMTUiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzE7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI1LjkiIGN5PSI2LjkiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzA7MTswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNCIgY3k9IjMuNiIgcj0iMi42Ij48YW5pbWF0ZSBhY2N1bXVsYXRlPSJub25lIiBhZGRpdGl2ZT0icmVwbGFjZSIgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBiZWdpbj0iMHMiIGNhbGNNb2RlPSJsaW5lYXIiIGR1cj0iMS4zcyIgZmlsbD0icmVtb3ZlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgcmVzdGFydD0iYWx3YXlzIiB2YWx1ZXM9IjA7MDswOzA7MDswOzE7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIyLjEiIGN5PSI2LjkiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzA7MDswOzEiLz48L2NpcmNsZT48L2c+PC9zdmc+"
                                            width="50"
                                            height="50"
                                            alt="loader"
                                        />
                                    </h3>
                                }
                                endMessage={<h4>Nothing more to show</h4>}>
                                {memes.map(meme => (
                                    <Meme data={meme} key={meme.ups} />
                                ))}
                            </InfiniteScroll>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetcher('https://meme-api.herokuapp.com/gimme/4');

    return {
        props: { initalMemes: data?.memes },
        revalidate: 5
    };
}
