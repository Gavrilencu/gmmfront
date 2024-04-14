import { writable } from "svelte/store";

export let openMenu = writable(false);
export let products = []
export async function getList() {
    const response = await fetch("/api/products");
    products = await response.json();
}
