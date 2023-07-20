export const Api_constant = {
    domain: 'https://apibeta.getcrazycoupons.com/api',
    header: {
        headers: {
            Authorization: `Bearer 0aad178b2a110c9a23a2d7b41f88a30146e3c6542170664edd442992eaec12dfb8ca7c1e89ff0977a4f236831aea193fb90f0096c0333693fd735045690048591b05abb6939fe08b492418cfc90ab638c0e5b7de191791198f57e699760c06a581b8071680a93d350cf32abf30e5702124ea0cf729d505ff5872c208d9713082`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    },

    sub_domain: {
        get_category_and_store: '/coupons?populate=*',
        get_category: '/categories',
        get_store: '/stores',
        get_coupon: '/coupons',
        get_blogs: '/blogs',
        get_help: '/helps',
        get_meta: '/metatags',
        get_index: '/index-pages',
        get_seasonal_deals: '/seasonal-deals',
        contact_form: '/contact-forms',
        sliders: '/sliders',
        featureTopDeals: '/feature-top-deals',
    },
};