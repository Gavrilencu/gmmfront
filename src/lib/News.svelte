<script>
  import { onMount } from "svelte";
  import Modal from "$lib/Modal.svelte";

  let products = [];
  let selectedProduct = null;

  onMount(async () => {
    const response = await fetch("/products/news");
    products = await response.json();
  });

  function showProductDetails(product) {
    selectedProduct = product;
  }

  function closeProductDetails() {
    selectedProduct = null;
  }
</script>

<main class="news">
  <span class="text">NOUTATI</span>
  <div class="newProducts">
    {#each products as product}
      <div class="box" on:click={() => showProductDetails(product)}>
        <img class="imgprod" src={`/${product.image}`} alt="" />
        <span class="name">{product.name}</span>
      </div>
    {/each}
  </div>
</main>
{#if selectedProduct}
  <Modal product={selectedProduct} onClose={closeProductDetails} />
{/if}

<style>
  .imgprod {
    width: 90%;
  }
  .newProducts {
    margin-top: 30px;
    padding-inline: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .name {
    text-align: center;
    width: 100%;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    margin-top: 10px;
  }
  .box {
    width: 300px;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 0px 0px 4px rgba(29, 141, 122, 0.685);
    border-radius: 20px;
    background-color: rgba(240, 248, 255, 0.205);
    height: 350px;
    display: flex;
    flex-direction: column;
    margin: 25px;
    align-items: center;
    justify-content: center;
    transition: 0.5s linear;
    cursor: pointer;
  }
  .box:hover {
    box-shadow: 0px 0px 10px rgba(24, 221, 47, 0.415);
    transform: scale3d(1.05, 1.05, 0.5);
  }
  .text {
    width: 100%;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
  }
  .news {
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }
</style>
