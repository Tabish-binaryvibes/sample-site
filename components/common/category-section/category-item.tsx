import styles from './category-item.module.scss';

interface CategoryItemArray {
    item: CategoryItem;
}

interface CategoryItem {
    name: string;
    src: string;
}

export default function CategoryItem({ item }: CategoryItemArray) {

    return (
        <div className={styles.category__item}>
            <div className="text-center">
                <img src={item?.src} alt="deals" />
            </div>
            <div className={styles.best__deals__img__container}>
                <h6 className={`text-center ${styles.best__deals__text}`}>
                    {item?.name}
                </h6>
            </div>
        </div>
    )
}