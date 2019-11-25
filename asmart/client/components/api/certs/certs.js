import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getCerts() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/certs`);
    return await res.json();
}
