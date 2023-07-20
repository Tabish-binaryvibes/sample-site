import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { Api_constant } from '../../lib/api-constant';
import { MetaTagsProps } from '../../models/common-models';

interface MetaTags {
    metaTags: MetaTagsProps
}

const MetaTags: React.FC<MetaTags> = ({ metaTags }) => {

    const [getMetaTags, setMetaTags] = useState<MetaTagsProps>({ title: metaTags.title, description: metaTags.description, image: metaTags.image, url: metaTags.url, keywords: metaTags.keywords, slug: metaTags.slug });

    return (
        <Head>
            <title>{getMetaTags?.title}</title>
            <meta name="description" content={getMetaTags?.description} />
            <meta property="og:title" content={getMetaTags?.title} />
            <meta property="og:description" content={getMetaTags.description} />
            <meta property="og:image" content={getMetaTags.image} />
            <meta property="og:url" content="https://www.saversafari.com" />

            <meta name="author" content="Saver Safari" />
            <meta name="robots" content="index,follow" />

            {/* OG Tags */}

            <meta property="og:title" content={getMetaTags?.title} />
            <meta property="og:description" content={getMetaTags?.description} />
            <meta property="og:image" content={getMetaTags?.image} />
            <meta property="og:url" content="https://www.saversafari.com" />

            {/* Twitter Card Tags (for Twitter sharing): */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Saver Safari" />
            <meta name="twitter:description" content={getMetaTags?.description} />
            <meta name="twitter:image" content={getMetaTags?.image} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@yourtwitterhandle" />
            <meta name="twitter:title" content={getMetaTags?.title} />
            <meta name="twitter:description" content={getMetaTags?.description} />
            <meta name="twitter:image" content={getMetaTags?.image} />

            {/* Instagram Meta Tags (for Instagram posts) */}

            <meta property="og:title" content={getMetaTags?.title} />
            <meta property="og:description" content={getMetaTags?.description} />
            <meta property="og:image" content={getMetaTags?.image} />

            {/* Facebook Meta Tags (for Facebook sharing): */}
            <meta property="og:title" content={getMetaTags?.title} />
            <meta property="og:description" content={getMetaTags?.description} />
            <meta property="og:image" content={getMetaTags?.image} />
            <meta property="og:url" content="https://www.saversafari.com" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default MetaTags;