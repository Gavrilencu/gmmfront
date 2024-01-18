<script>
  import chromogen from "$lib/chromogen.json";
  import "$lib/productScreen.css";
  import Header from "../../../lib/Header.svelte";
  import Subheader from "../../../lib/Subheader.svelte";
  import { page } from "$app/stores";
  import Footer from "../../../lib/Footer.svelte";
  const cromoId = $page.params.cromoId;
  let product = null;
  for (let x of chromogen) {
    if (x.id == cromoId) {
      product = x;
    }
  }
  // Verificăm dacă avem parametrul news în URL
</script>

<Header />
<div class="menu">
  <Subheader />
</div>
<h1 class="detail">Detalii Produs</h1>
<main class="news">
  {#if product}
    <img class="img" src={product.img} alt="" />
    <div class="descriptions">
      <h1 class="name">{product.Productname}</h1>
      <span class="subname">{product.Productdescription}</span>
    </div>
  {:else}
    <p class="notfound" style="width: 100%;text-align:center">
      Ooops... Produsul nu a fost gasit.
    </p>
  {/if}
</main>
<Footer />

<style>
  .detail {
    width: 100%;
    align-items: center;
    display: flex;
    color: rgb(13, 68, 152);
    justify-content: center;
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
  .name {
    font-family: "Lato", sans-serif;
    margin-bottom: 50px;
  }
  .subname {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .descriptions {
    width: 50%;
    box-shadow: 0px 0px 20px rgba(143, 143, 206, 0.601);
    border-radius: 20px;
    padding: 20px;
  }
  .img {
    width: 40%;
  }
  .news {
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding-inline: 120px;
  }
  .notfound {
    font-family: "Lato", sans-serif;
    font-size: 30px;
    font-weight: 600;
    margin-top: 20p;
  }
  .menu {
    top: 0;
    position: absolute;
    z-index: 1;
  }
</style>
