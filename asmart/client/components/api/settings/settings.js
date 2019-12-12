import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';

export async function  getThemeOptions() {
    const res = await fetch(`${packageMain.proxy}/wp-json/acf/v3/options/theme-options`);
    return await res.json();
}