import { client } from './sanity';

export async function getBannerData() {
  const query = `
    *[_type == "imgBanner"]{
      bannerImages[]{
        'imageUrl': asset->url,
        caption,
        altText,
        link
      }
    }
  `;

    const data = await client.fetch(query);
    // console.log(data)
  return data;
}
