import styles from './header.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <div className={styles.header__container}>
                <Container>
                    <Row>
                        <Col md={2} sm={2} xs={4}>
                            <img src="/images/website-logos/header_logo.png" alt="Saver Safari Logo" loading='lazy' className='mob-mode' />
                            <img src="/images/website-logos/header_web_logo.png" style={{ width: "100%" }} alt="Saver Safari Logo" loading='lazy' className='web-mode' />
                        </Col>
                        <Col md={10} className='d-flex d-flex-center' sm={10} xs={8}>
                            <div className={styles.search__bar__container}>
                                <input type="text" className={styles.search__bar} placeholder='Search for stores, brands or offers' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.sub__header__container}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <ul className={styles.nav__bar}>
                                <li>Top Stores</li>
                                <li>Seasonal Deals</li>
                                <li>Our Blogs</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}