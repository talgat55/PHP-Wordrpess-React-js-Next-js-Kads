import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getSlides() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/slider`);
    return await res.json();
}
