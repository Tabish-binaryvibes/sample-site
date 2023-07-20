import { Api_constant } from "../lib/api-constant";
import { MetaTagsProps } from "../models/common-models";

export const callMetaTags = async () => {
    try {
        let getMetaTags, metaTags: MetaTagsProps;
        let metaTagsResponse = await fetch(
            `${Api_constant['domain']}${Api_constant['sub_domain']['get_meta']}?filters[slug][$eq]=blogs`,
            Api_constant['header']
        );
        getMetaTags = await metaTagsResponse.json();
        if (getMetaTags.data?.length > 0) {
            metaTags = getMetaTags.data[0].attributes;
            return metaTags;
        }
    } catch (error: any) {
        console.log(`Error: ${error.message}`);
    }
}
