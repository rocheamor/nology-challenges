import styles from './Album.module.scss';
import Banner from'../Banner/Banner';

const Album = ({title, coverUrl, rating, band}) => {
    const backgroundStyles = {
        backgroundImage: 'url( ' + coverUrl + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }

    return (
        <div className={styles.card} style={backgroundStyles}>
            {rating === '5' && <Banner text='Top Rating' />}
            <h3 className={styles.card__heading}>{title}</h3>
            <h4 className={styles.card__heading}>{band}</h4>
            <h5 className={styles.card__heading}>{rating}</h5>
        </div>
    )
}

export default Album;