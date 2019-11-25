import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';

export async function  getServiceBySlug(slug) {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/services?slug=${slug}`);
    return await res.json();
}
export async function  getServices() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/services`);
    return await res.json();
}

export async function  getServicesForBlock() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/services?per_page=9`);
    return await res.json();
}

export async function  getServicesForPage() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/services?per_page=12`);
    return await res.json();
}

