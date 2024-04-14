<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let product;
    let tempProduct = {...product};

    // Gestionarea fișierului de imagine încărcat
    let imageFile;

    // URL pentru previzualizarea imaginii
    let imageUrl = product.image || '';  // presupunem că 'image' este un URL

    function saveChanges() {
        const formData = new FormData();
        formData.append('name', tempProduct.name);
        formData.append('code', tempProduct.code);
        formData.append('description', tempProduct.description);
        formData.append('category', tempProduct.category);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        fetch(`/api/products/${product.id}`, {
            method: 'PUT',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log('Produs actualizat cu succes', result);
            close();
            dispatch('updateSuccess');
        })
        .catch(error => {
            console.error('Eroare la actualizarea produsului', error);
        });
    }

    function close() {
        dispatch('close');
    }

    // Actualizează previzualizarea imaginii când se selectează un fișier nou
    function handleFileChange(event) {
        imageFile = event.target.files[0];
        if (imageFile) {
            imageUrl = URL.createObjectURL(imageFile);
        }
    }
</script>

<div class="modal-backdrop">
    <div class="modal-content">
        <button on:click={close}>Închide</button>
        <form on:submit|preventDefault={saveChanges}>
            <label for="name">Nume:</label>
            <input id="name" type="text" bind:value={tempProduct.name} />

            <label for="code">Cod:</label>
            <input id="code" type="text" bind:value={tempProduct.code} />

            <label for="description">Descriere:</label>
            <textarea id="description" rows="7" bind:value={tempProduct.description}></textarea>

            <label for="image">Imagine:</label>
            <input id="image" type="file" on:change={handleFileChange} />
            {#if imageUrl}
                <img src={imageUrl} alt="Preview" style="width: 100%; margin-top: 10px;" />
            {/if}

            <button type="submit">Salvează Modificările</button>
        </form>
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .modal-content {
        background: white;
        padding: 20px;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: auto;
        overflow: auto;
        max-width: 600px;
    }
    label {
        display: block;
        margin-top: 10px;
    }
    input, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        box-sizing: border-box;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
    }
</style>
