import { Col, Container, Row } from 'react-bootstrap'
import styles from './featured-stores.module.scss'
import FeatureStoreItem from './featured-store-item';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';
import { SWIPER_BREAKPOINTS } from '../../../lib/constants';
export default function FeaturedStoresSection() {

    const break_points = SWIPER_BREAKPOINTS;

    let data = [
        { "name": '/images/store-logos/1.png' },
        { "name": '/images/store-logos/2.png' },
        { "name": '/images/store-logos/3.png' },
        { "name": '/images/store-logos/4.png' },
        { "name": '/images/store-logos/5.png' },
        { "name": '/images/store-logos/6.png' },
        { "name": '/images/store-logos/7.png' },
        { "name": '/images/store-logos/8.png' },
    ]
    return (
        <Container >
            <Row>
                <Col>
                    <div className={`${styles.featured__stores__container}`}>
                        <div className={styles.featured__stores__content}>
                            <h2>
                                Featured Stores
                            </h2>
                            <p className={styles.featured__stores__paragraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu pretium justo. Integer vel pellentesque odio. Ut sit amet elit leo. Donec et turpis leo. Phasellus ut neque a erat posuere blandit. Ut molestie dictum magna.
                            </p>
                        </div>

                    </div >
                </Col>
            </Row>
            <Row className={styles.featured__stores__items}>
                <Swiper
                    slidesPerView={5}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                        waitForTransition: true
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    speed={1000}
                    breakpoints={break_points}
                >
                    {
                        data.map((d, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <FeatureStoreItem logo={d.name} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                        waitForTransition: true
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    speed={1500}
                    breakpoints={break_points}
                >
                    {
                        data.map((d, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <FeatureStoreItem logo={d.name} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                        waitForTransition: true
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    speed={2000}
                    breakpoints={break_points}
                >
                    {
                        data.map((d, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <FeatureStoreItem logo={d.name} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

                {/* <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col>
                <Col md={2} xs={6} sm={3}>
                    <FeatureStoreItem />
                </Col> */}
            </Row>
            <Row className={styles.view__more__padding}>
                <Col className={styles.view__more__container}>
                    <button className='view__more__btn'>
                        View More
                    </button>
                </Col>
            </Row>
        </Container>
    )
}