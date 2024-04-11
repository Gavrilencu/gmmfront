<script>
    import { onMount } from "svelte";
    import Modal from "../../lib/Modal.svelte";

    let products = [];
    let selectedProduct = null;

    onMount(async () => {
        const response = await fetch("/api/products");
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
    <a href="/">Pagina principala</a>
    <a href="getProducts">Vizualizați Produsele</a>
    <a href="addProduct">Adaugă Produs</a>
</nav>

<h2>Produse</h2>

{#each [...new Set(products.map(prod => prod.category))] as category}
    <h3>{category}</h3>
    <div class="product-grid">
        {#each products.filter(prod => prod.category === category) as product}
            <div class="product-box" on:click={() => showProductDetails(product)}>
                <h4>{product.name}</h4>
                <p>Cod: {product.code}</p>
                <!-- Adăugați și alte detalii ale produsului, dacă este necesar -->
            </div>
        {/each}
    </div>
{/each}

{#if selectedProduct}
    <Modal product={selectedProduct} onClose={closeProductDetails} />
{/if}

<style>
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 10px;
    }

    .product-box {
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .product-box:hover {
        background-color: #f0f0f0;
    }
    h3 {
        margin-top: 30px;
    }
</style>
