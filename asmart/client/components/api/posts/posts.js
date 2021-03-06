import packageMain from "../../../package";
import fetch from 'isomorphic-unfetch';

export async function getPosts() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts`);
    return await res.json();
}

export async function getPostBySlug(slug) {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?slug=${slug}`);
    return await res.json();
}

export async function getLastNews() {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?per_page=5`);
    return await res.json();
}
export async function getPostForPage(activePage) {
    const res = await fetch(`${packageMain.proxy}/wp-json/wp/v2/posts?per_page=12&page=${activePage}`);
    return await res.json();
}


export async function getCountPosts() {
    const res = await fetch(`${packageMain.proxy}/wp-json/custom/v1/post-count`);
    return await res.json();
}


