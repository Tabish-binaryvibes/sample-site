import { Container } from 'react-bootstrap';
import MetaTags from '../../../components/common/meta-tags';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { callMetaTags } from '../../../helpers/common';
import { MetaTagsProps } from '../../../models/common-models';
import Slider from '../../../components/homepage/sliders/Sliders';
import AdsSection from '../../../components/homepage/ads-section/AdsSection';
import DealsOfTheDay from '../../../components/homepage/deals-of-the-day/deals-of-the-day';
import styles from '../../styles/Home.module.scss'
import CategorySection from '../../../components/common/category-section/category-section';
import FeaturedStoresSection from '../../../components/homepage/featured-stores/FeaturedStoresSection';

interface HomePageProps {
    // metaTags: MetaTagsProps;
}

export default function HomePage(): HomePageProps {

    return (
        <>
            {/* <MetaTags metaTags={metaTags} /> */}
            <Container className={styles.category__section}>
                <CategorySection />
            </Container>
            <Container fluid className='p-0'>
                <Slider />
            </Container>
            <Container>
                <AdsSection />
            </Container>
            <div className={`p-0 ${styles.deals__of__the__day__container}`}>
                <Container>
                    <DealsOfTheDay />
                </Container>
            </div>
            <Container>
                <FeaturedStoresSection />
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    // const metaTags = await callMetaTags();
    return {
        props: {
            // metaTags: metaTags
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: ['/us'],
        fallback: true,
    }
}