<script>
    export let productId;

    async function deleteProduct() {
        const response = await fetch(`/api/products/${productId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Handle success
        }
    }
</script>

<nav>
    <a href="getProducts">Vizualizați Produsele</a>
    <a href="addProduct">Adaugă Produs</a>
    <a href="updateProduct">Actualizează Produs</a>
    <a href="deleteProduct">Șterge Produs</a>
</nav>

<button on:click={deleteProduct}>Șterge Produs</button>
