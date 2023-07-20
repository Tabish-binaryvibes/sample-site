import styles from './homepage-coupon.module.scss'

export default function HomepageCoupon() {
    return (
        <div className={styles.homepage__card}>
            <div className={styles.coupon__header}>
                <div className={styles.logo__container}>
                    <img src="/images/jc-penney.png" className='img-fluid' alt="jc-penney" />
                </div>
            </div>
            <div className={styles.coupon__body}>
                <div className={styles.percent__off}>
                    20% OFF
                </div>
                <p className={styles.coupon__card__description}>
                    Save More | Get Up To 90% Off! on Electronic Gadgets  Electronic Gadgets
                </p>
                <div className={styles.coupon__type}>
                    Coupon Code
                </div>
            </div>
        </div>
    )
}