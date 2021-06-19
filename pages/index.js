import Head from "next/head";
import styles from "../styles/Home.module.css";
import Meme from "../component/Meme";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const fetcher = async (url) =>  await fetch(url).then( async(res) => await res.json());

// export async function 

export default function Home(props) {
  const [hasMore, setHasMore] = useState(true);
  const [memes, setMemes] = useState(props.props.memes);

  // console.log(props)

  const getMemes = async () => {
    const data = await fetcher("/api/random");

    setMemes([...memes, ...data.memes]);
  };


  return (
    <div className={styles.container} >
      <Head>
        <title>Random Memes</title>
        <meta name="description" content="Random Memes by Gauti." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Random <a >Next.meme!</a>
        </h3>

        <div className={styles.grid}>
          {/* {error && <div>Failed to load meme</div>} */}
          {memes ? (
            
              <InfiniteScroll
                dataLength={memes.length+5}
                next={getMemes}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
              >
                {memes.map((meme) => (
                  <Meme data={meme} key={meme.url} />
                ))}
              </InfiniteScroll>
            
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Developed by <span className={styles.logo}>Gautam</span>
        </a>
      </footer>
    </div>
  );
}


Home.getInitialProps = async ({req}) => {
  
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  // console.log("baseUrl",baseUrl);
  // const { origin } = absoluteUrl();

  const data = await fetcher(baseUrl+"/api/random");
  // console.log("data",data);


    return {
      props: { memes: data.memes}, // will be passed to the page component as props
    }
  }
