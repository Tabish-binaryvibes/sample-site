import { Container, Button, Row, Col } from 'react-bootstrap';

import styles from "./ads-section.module.scss";

export default function AdsSection() {
    return <div className={styles.ads__section__container}>
        <Row>
            <Col md={12}>
                <img src="/images/website_ad/1.png" alt="Horizontal Banner" className={`w-100 web-mode ${styles.horizontal__top__banner__margin}`} loading='lazy' />
                <img src="/images/website_ad/mobile_ad.png" alt="Horizontal Banner" className={`w-100 mob-mode ${styles.horizontal__top__banner__margin}`} loading='lazy' />
            </Col>
            <Col md={6}>
                <img src="/images/website_ad/2.png" alt="Horizontal Banner" className={`w-100 mt-1rem`} loading='lazy' />
            </Col>
            <Col md={6}>
                <img src="/images/website_ad/3.png" alt="Horizontal Banner" className={`w-100 mt-1rem`} loading='lazy' />
            </Col>
        </Row>
    </div>;
}