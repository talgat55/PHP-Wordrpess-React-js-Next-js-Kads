import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getPosts() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts`);
    return await res.json();
}
