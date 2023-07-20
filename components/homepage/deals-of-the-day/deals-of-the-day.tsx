import { Container, Row, Col } from 'react-bootstrap';
import styles from './deals-of-the-day.module.scss';
import HomepageCoupon from '../../common/homepage-coupon/homepage-coupon';

export default function DealsOfTheDay() {

    return (<div className={styles.deal__container}>
        <div className={styles.deals__heading}>
            <h2>
                Deals of  the Day
            </h2>
            <p className={styles.deals__paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu pretium justo. Integer vel pellentesque odio. Ut sit amet elit leo. Donec et turpis leo. Phasellus ut neque a erat posuere blandit. Ut molestie dictum magna.
            </p>
            <Container>
                <Row>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <HomepageCoupon />
                    </Col>

                </Row>
                <Row className={styles.view__more__padding}>
                    <Col className={styles.view__more__container}>
                        <button className='view__more__btn'>
                            View More
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>)

}