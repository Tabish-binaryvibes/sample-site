import { Col, Container, Row } from 'react-bootstrap';
import styles from './footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <Container fluid className={styles.footer__main__container}>
            <Container>
                <Row >
                    <Col md={6}>
                        <div className={styles.website__meta__data}>
                            <div className={styles.website__log}>
                                <img src="/images/website-logos/saver-safari-white-logo.webp" alt="Saver Safari Logo" loading='lazy' />
                            </div>
                            <div className={styles.website__para}>
                                <p>
                                    Savor Safari  is an online deals
                                    website where you can find thousands of coupons and
                                    promo codes in your favorite stores.
                                </p>
                            </div>
                            <div className={styles.social__icons__container}>
                                <div className={styles.social__icon}>
                                    <a href="">
                                        <img src="/images/social-icons/icon-twitter-white.svg" alt="" />
                                    </a>
                                </div>
                                <div className={styles.social__icon}>
                                    <a href="">
                                        <img src="/images/social-icons/icon-facebook-white.svg" alt="" />
                                    </a>
                                </div>
                                <div className={styles.social__icon}>
                                    <a href="">
                                        <img src="/images/social-icons/icon-insta-white.svg" alt="" />
                                    </a>
                                </div>
                                <div className={styles.social__icon}>
                                    <a href="">
                                        <img src="/images/social-icons/icon-pinterest-white.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col md={2}>
                        <h3 className={styles.footer__listItem__heading}>
                            Company
                        </h3>
                        <ul className={styles.list__item__container}>
                            <li>
                                <Link href={''}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Career
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h3 className={styles.footer__listItem__heading}>
                            Help
                        </h3>
                        <ul className={styles.list__item__container}>
                            <li>
                                <Link href={''}>
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Delivery Details
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h3 className={styles.footer__listItem__heading}>
                            Resources
                        </h3>
                        <ul className={styles.list__item__container}>
                            <li>
                                <Link href={''}>
                                    Free eBooks
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Development Tutorial
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    How to-Blog
                                </Link>
                            </li>
                            <li>
                                <Link href={''}>
                                    Youtube Playlist
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}