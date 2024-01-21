<script>
    export let productId;
    let category, name, code, description;

    async function updateProduct() {
        const response = await fetch(`/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ category, name, code, description }),
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

<form on:submit|preventDefault={updateProduct}>
    <input type="text" bind:value={category} placeholder="Categorie" />
    <input type="text" bind:value={name} placeholder="Nume" />
    <input type="text" bind:value={code} placeholder="Cod" />
    <textarea bind:value={description} placeholder="Descriere"></textarea>
    <button type="submit">Actualizează Produs</button>
</form>
