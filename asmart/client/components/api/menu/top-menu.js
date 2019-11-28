import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getMenu() {
    const res = await fetch(`${packageMain.proxy}/wp-json/menus/v1/menus/top_menu`);
    return await res.json();
}



