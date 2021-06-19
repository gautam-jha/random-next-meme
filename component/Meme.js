import styles from '../styles/Meme.module.css';

function Meme(props) {
    const { data } = props;

    return (
        data && (
            <div className={`${styles.meme} rounded overflow-hidden shadow-lg bg-white`}>
                {/* <img
                    data-src={data.url}
                    alt={data.title}
                    height={500}
                    width="auto"
                    style={{ pointerEvents: 'none' }}

                    className="w-full lazy" 
                /> */}
                {/* <h4 className="text-center p-2">{data.title}</h4> */}
                <img
                    className="w-full lazy"
                    srcSet={`${data.url}  375w`}
                    alt={data.title}
                    sizes="(min-width: 400px) 80vw, 100vw"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-sm mb-2">{data.title}</div>
                </div>
            </div>
        )
    );
}

export default Meme;
