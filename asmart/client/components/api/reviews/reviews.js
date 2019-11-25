import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getReviews() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/reviews`);
    return await res.json();
}
