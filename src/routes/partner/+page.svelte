<script>
  import Subheader from "../../lib/Subheader.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import sanimed from "$lib/img/sanimed.png";
  import cromagar from "$lib/img/cromagar.webp";
  import procomcure from "$lib/img/procomcure.png";
  import geneirst from "$lib/img/genefirst.jpg";
  import pure from "$lib/img/pure.png";
  import { onMount } from "svelte";
  import { openMenu } from "$lib/index.js";
  onMount(() => {
    openMenu.set(false);
  });

  ///sanimed///PROCOMCHUR///GENEFIRST.COM///CHROMAGAR/DIAGNOSTICS//AQUAPURE
</script>

<Subheader />
<Header />
<main class="app">
  <h1 class="text">PARTENERI</h1>
  <div class="partblock">
    <a href="https://sanimed.com.ua/" target="”_blank”" class="block">
      <img src={sanimed} alt="" class="imgpartenre" />
    </a>
    <a href="https://www.chromagar.com/en/" target="”_blank”" class="block">
      <img src={cromagar} alt="" class="imgpartenre" />
    </a>
    <a href="https://shop.procomcure.com/" class="block" target="”_blank”">
      <img src={procomcure} alt="" class="imgpartenre" />
    </a>
    <a href="https://www.genefirst.com/" class="block" target="”_blank”">
      <img src={geneirst} alt="" class="imgpartenre" />
    </a>
    <a href="https://www.aquapurefilters.com/" class="block" target="”_blank”">
      <img src={pure} alt="" class="imgpartenre" />
    </a>
  </div>
</main>
<Footer />

<style>
  .imgpartenre {
    width: 100%;
  }
  .block {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    margin: 20px;
    cursor: pointer;
    padding: 5px;
    transition: 0.3s;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 1px #114640;
  }
  .block:hover {
    transform: scale3d(1.1, 1.1, 0.3);
  }
  .partblock {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-block: 20px;
    color: #114640;
  }
  .app {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;

    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
