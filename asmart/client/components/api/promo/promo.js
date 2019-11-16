import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';

// export async function  getPostBySlug(slug) {
//     const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?slug=${slug}`);
//     return await res.json();
// }

export async function  getLastPromo() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/promo?per_page=3`);
    return await res.json();
}

