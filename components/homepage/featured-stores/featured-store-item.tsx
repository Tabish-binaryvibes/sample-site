import styles from './feature-store-item.module.scss';

interface FeaturedStoreItems {
    logo: string;
}

export default function FeatureStoreItem({ logo }: FeaturedStoreItems) {
    return (
        <div className={styles.store__item__container}>
            <img src={logo} alt="Coupon Cards" className='img-fluid' />
        </div>
    )
}