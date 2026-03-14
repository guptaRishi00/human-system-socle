import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const PageQuery = (slug: string) =>
  qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: {
      blocks: {
        on: {
          "pricing-page.pricing-card": {
            populate: {
              cards: {
                populate: {
                  features: true,
                },
              },
            },
          },
        },
      },
    },
  });

export async function getPageData(slug: string) {
  const BASE_URL = getStrapiURL();
  const query = PageQuery(slug);
  const url = `${BASE_URL}/api/pages?${query}`;
  return await fetchAPI(url, {
    method: "GET",
    next: { tags: ["strapi-data"] }, // Tag this request
  });
}
