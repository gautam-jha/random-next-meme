import styles from '../styles/Meme.module.css';

function Meme(props) {
    const { data } = props;

    return (
        data && (
            <div className={`${styles.meme} 375w`}>
                <img
                    srcSet={data.url}
                    alt={data.title}
                    height={500}
                    width="auto"
                    style={{ pointerEvents: 'none' }}
                    sizes="(min-width: 400px) 80vw, 100vw"
                />
                <h4 style={{ textAlign: 'center' }}>{data.title}</h4>
            </div>
        )
    );
}

export default Meme;
