import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';
export async function  getPosts() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts`);
    return await res.json();
}

export async function  getPostBySlug(slug) {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?slug=${slug}`);
    return await res.json();
}

export async function  getLastNews() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?per_page=5`);
    return await res.json();
}

export async function  getPostForPage() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?per_page=12`);
    return await res.json();
}



