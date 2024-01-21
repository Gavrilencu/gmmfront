<script>
    let category, name, code, description, image;

    async function handleSubmit() {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("name", name);
        formData.append("code", code);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await fetch("/products", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                // Produsul a fost adăugat cu succes
                const result = await response.json();
                console.log(result);
                // Resetați formularul sau redirecționați utilizatorul, etc.
            } else {
                // Tratați erorile serverului
                console.error("Eroare la adăugarea produsului");
            }
        } catch (error) {
            // Tratați erorile de rețea
            console.error("Eroare de rețea:", error);
        }
    }
</script>

<nav>
    <a href="getProducts">Vizualizați Produsele</a>
    <a href="addProduct">Adaugă Produs</a>
    <a href="updateProduct">Actualizează Produs</a>
    <a href="deleteProduct">Șterge Produs</a>
</nav>

<h1 class="adaugaprod">Adauga Produse</h1>
<form on:submit|preventDefault={handleSubmit} class="product-form">
    <div class="form-group">
        <input type="text" bind:value={category} placeholder="Categorie" />
    </div>
    <div class="form-group">
        <input type="text" bind:value={name} placeholder="Nume" />
    </div>
    <div class="form-group">
        <input type="text" bind:value={code} placeholder="Cod" />
    </div>
    <div class="form-group">
        <textarea bind:value={description} placeholder="Descriere"></textarea>
    </div>
    <div class="form-group">
        <input
            type="file"
            accept="image/*"
            on:change={(e) => (image = e.target.files[0])}
        />
    </div>
    <button type="submit" class="submit-button">Salvează Produs</button>
</form>

<style>
    .adaugaprod {
        width: 100%;
        text-align: center;
    }
    .product-form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    input,
    textarea {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    textarea {
        height: 100px;
        resize: vertical;
    }
    .submit-button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .submit-button:hover {
        background-color: #0056b3;
    }
</style>
