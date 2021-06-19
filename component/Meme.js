import styles from '../styles/Meme.module.css';

import Image from 'next/image';

function Meme(props) {
  const { data } = props;

  // console.log(props);

  return (
    data && (
      <div className={styles.meme}>
        <img
          src={data.url}
          alt={data.title}
          height={500}
          width="auto"
          style={{ pointerEvents: 'none' }}
        />
        <h4 style={{ textAlign: 'center' }}>{data.title}</h4>
      </div>
    )
  );
}

export default Meme;
