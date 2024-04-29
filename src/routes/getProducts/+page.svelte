<script>
    import { onMount } from "svelte";
    import EditModal from "../../lib/EditModal.svelte"; // Schimbă importul la noua componentă

    let products = [];
    let selectedProduct = null;

    async function fetchProducts() {
        const response = await fetch("/api/products");
        products = await response.json();
        // Decodăm fiecare imagine a produselor pentru a fi afișată
        products.forEach(product => {
            if (product.image) {
                product.imageUrl = `data:image/jpeg;base64,${product.image}`;
            }
        });
    }

    onMount(() => {
        fetchProducts();
    });

    function showProductDetails(product) {
        selectedProduct = product;
    }

    function closeProductDetails() {
        selectedProduct = null;
        fetchProducts(); // Reîncarcă produsele după închiderea modalului
    }

    function handleSave({ detail }) {
        const updatedProduct = detail.product;
        updateProduct(updatedProduct).then(() => {
            closeProductDetails(); // Se va declanșa reîncărcarea listei de produse
        });
    }

    async function updateProduct(product) {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('code', product.code);
        formData.append('description', product.description);
        formData.append('category', product.category);
        if (product.image instanceof File) {
            formData.append('image', product.image);
        }

        try {
            const response = await fetch(`/api/products/${product.id}`, {
                method: 'PUT',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            return response.json();
        } catch (e) {
            console.error('Error updating product', e);
        }
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
                {#if product.imageUrl}
                    <img src={product.imageUrl} alt={`Imaginea produsului ${product.name}`} class="product-image"/>
                {/if}
            </div>
        {/each}
    </div>
{/each}

{#if selectedProduct}
    <EditModal product={selectedProduct} on:close={closeProductDetails} on:save={handleSave} />
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
        overflow: hidden;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .product-box:hover {
        background-color: #f0f0f0;
    }
    h3 {
        margin-top: 30px;
    }
    .product-image {
        max-width: 100%; 
        height: auto;
    }
</style>

