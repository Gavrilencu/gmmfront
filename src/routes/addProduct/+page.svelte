<script>
    let categories = ['MediiCromogene','MediiNutriente','EchipamenteLaborator', 'TestePCR', 'TesteRapide'];
    let category, name, code, description, image;

    async function handleSubmit() {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("name", name);
        formData.append("code", code);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                alert("Produsul a fost salvat cu succes!");
                resetForm();
            } else {
                console.error("Eroare la adăugarea produsului");
            }
        } catch (error) {
            console.error("Eroare de rețea:", error);
        }
    }

    function resetForm() {
        category = '';
        name = '';
        code = '';
        description = '';
        image = null;
    }
</script>

<nav>
    <a href="/">Pagina principala</a>
    <a href="getProducts">Vizualizați Produsele</a>
    <a href="addProduct">Adaugă Produs</a>
</nav>

<div class="container">
    <h1 class="adaugaprod">Adauga Produse</h1>
    <form on:submit|preventDefault={handleSubmit} class="product-form">
        <div class="form-group">
            <label for="category">Categorie:</label>
            <select id="category" bind:value={category} required>
                <option value="" disabled selected>Selectează o categorie</option>
                {#each categories as cat}
                    <option value={cat}>{cat}</option>
                {/each}
            </select>
        </div>
        <div class="form-group">
            <label for="name">Nume:</label>
            <input type="text" id="name" bind:value={name} placeholder="Nume" required />
        </div>
        <div class="form-group">
            <label for="code">Cod:</label>
            <input type="text" id="code" bind:value={code} placeholder="Cod" />
        </div>
        <div class="form-group">
            <label for="description">Descriere:</label>
            <textarea id="description" bind:value={description} placeholder="Descriere" required></textarea>
        </div>
        <div class="form-group">
            <label for="image">Imagine:</label>
            <input type="file" id="image" accept="image/*" on:change={(e) => (image = e.target.files[0])} />
        </div>
        <button type="submit" class="submit-button">Salvează Produs</button>
    </form>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    .adaugaprod {
        text-align: center;
    }
    .product-form {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px;
    }
    .form-group {
        margin-bottom: 20px;
    }
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
    input[type="text"], textarea, select {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    select {
        display: block; /* Ajustează selectul să se comporte consistent cu inputurile */
        height: 38px; /* Asigură-te că înălțimea este suficientă pentru a fi ușor accesibil */
        background: white; /* Setează fundalul alb pentru consistență */
    }
    textarea {
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
