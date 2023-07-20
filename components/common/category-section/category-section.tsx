import { Col, Row } from 'react-bootstrap';
import CategoryItem from './category-item';
import styles from './category-section.module.scss';
import { useState } from 'react';
import { CATEGORY_ITEMS } from '../../../lib/constants';

export default function CategorySection() {

    const [openAccordianSection, setOpenAccordianSection] = useState(false);

    const openAccordian = () => {
        setOpenAccordianSection(!openAccordianSection);
    }

    return (
        <>
            <Row className={styles.category__section__container}>
                {
                    CATEGORY_ITEMS && CATEGORY_ITEMS.map((d, index) => {
                        return (<Col md={2} xs={4} sm={3}  key={index} className={`mt-1rem ${styles.bottom__border}`}>
                            <CategoryItem item={d} />
                        </Col>)
                    })
                }
            </Row>
            <div className={styles.all__categories}>
                {

                    <div className={openAccordianSection ? styles.category__section__true : styles.category__section__false}>
                        <Row >
                            {
                                CATEGORY_ITEMS && CATEGORY_ITEMS.map((d, index) => {
                                    return (<Col md={2} xs={4} sm={3} key={index} className={`mt-1rem ${styles.bottom__border}`}>
                                        <CategoryItem item={d} />
                                    </Col>)
                                })
                            }
                        </Row>
                    </div>

                }

                <Row >
                    <Col className={`d-flex justify-content-end ${openAccordianSection ? 'mt-2rem' : ''}`}>
                        <button className={styles.view__more__category} onClick={() => openAccordian()}>
                            <span>
                                View More Categories
                            </span>
                            <span className='ml-1rem'>
                                <img src="/images/categories/arrow-up.svg" alt="arrow up" className={openAccordianSection ? styles.rotateImage : ""} />
                            </span>
                        </button>
                    </Col>
                </Row>
            </div>

        </>


    )
}