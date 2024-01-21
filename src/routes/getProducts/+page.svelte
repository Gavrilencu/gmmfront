<script>
    import { onMount } from "svelte";
    import Modal from "../../lib/Modal.svelte";

    let products = [];
    let selectedProduct = null;

    onMount(async () => {
        const response = await fetch("http://localhost:3000/products");
        products = await response.json();
    });

    function showProductDetails(product) {
        selectedProduct = product;
    }

    function closeProductDetails() {
        selectedProduct = null;
    }
</script>

<nav>
    <a href="getProducts">Vizualizați Produsele</a>
    <a href="addProduct">Adaugă Produs</a>
    <a href="updateProduct">Actualizează Produs</a>
    <a href="deleteProduct">Șterge Produs</a>
</nav>

<h2>Produse</h2>
<ul>
    {#each products as product}
        <li on:click={() => showProductDetails(product)}>
            <h3>{product.name}</h3>
        </li>
    {/each}
</ul>

{#if selectedProduct}
    <Modal product={selectedProduct} onClose={closeProductDetails} />
{/if}

<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        cursor: pointer;
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 5px;
        transition: background-color 0.3s;
    }
    li:hover {
        background-color: #f0f0f0;
    }
</style>
