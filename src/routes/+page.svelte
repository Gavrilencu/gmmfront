<script>
  import "$lib/responsiv.css";
  import Header from "$lib/Header.svelte";
  import Subheader from "../lib/Subheader.svelte";
  import News from "../lib/News.svelte";
  import Footer from "../lib/Footer.svelte";
  import Info from "../lib/Info.svelte";
</script>

<div class="info">
  <Info />
</div>
<main class="app">
  <div class="header">
    <Header />
  </div>
  <Subheader />
  <News />
</main>
<Footer />

<style>
  .info {
    position: fixed;
    z-index: 1;
    top: 50%;
  }
  .app {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    position: relative;
  }
</style>
