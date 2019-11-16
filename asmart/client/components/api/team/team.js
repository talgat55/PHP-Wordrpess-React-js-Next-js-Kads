import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getTeams() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/teams`);
    return await res.json();
}
