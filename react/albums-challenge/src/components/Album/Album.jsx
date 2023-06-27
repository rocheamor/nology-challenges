import styles from './Album.module.scss';
import Banner from'../Banner';

const Album = ({title, bandName, rating, albumImg}) => {
    const backgroundStyles = {
        backgroundImage: 'url( ' + albumImg + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }

    return (
        <div className={styles.album} style={backgroundStyles}>
            {rating === 5 && <Banner text='Top Rating' />}
            <h3>{title}</h3>
            <h4>{bandName}</h4>
            <h5>{rating}</h5>
            <img src={albumImg} />
        </div>
    )
}

export default Album;