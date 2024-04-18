<script>
    export let product;
    export let onClose;
</script>

<div class="modal-background" on:click={onClose}>
    <div class="modal-content" on:click|stopPropagation>
        <button class="close-button" on:click={onClose}>&times;</button>
        <div class="infoblock">
            <h2>{product.name}</h2>
            <p class="category">Categorie: {product.category}</p>
            <p class="category">Cod: {product.code}</p>
            <p class="description">
                Descriere: <span>{product.description}</span>
            </p>
        </div>
        {#if product.image}
            <img
                src={`/${product.image}`}
                class="product-image"
                alt={product.name}
            />
        {/if}
    </div>
</div>

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100099;
    }
    .modal-content {
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 85%;
        max-height: 85%;
        overflow-y: auto;
    }
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: none;
        color: #333;
        font-size: 24px;
        cursor: pointer;
    }
    .infoblock {
        margin-bottom: 20px;
    }
    .category, .description {
        color: #666;
        font-size: 1rem;
        margin-top: 5px;
    }
    .product-image {
        max-width: 100%;
        max-height: 300px;
        object-fit: contain;
        margin-top: 20px;
    }
    h2 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 10px;
    }
    @media (min-width: 768px) {
        .modal-content {
            flex-direction: row;
            align-items: start;
            padding: 40px;
        }
        .infoblock {
            flex: 1;
            max-width: 50%;
        }
        .product-image {
            flex: 1;
            max-height: 100%;
        }
        h2 {
            font-size: 2rem;
        }
    }
</style>
