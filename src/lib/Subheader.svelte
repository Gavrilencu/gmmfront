<script>
  import logo from "$lib/img/logo.png";
  import menu from "$lib/img/menu.png";
  import menuwhite from "$lib/img/menuwhite.png";
  import close from "$lib/img/close.png";
  let m = false;
  function openmenu() {
    m = !m;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main class="subheader">
  <a href="/" class="home"><img src={logo} class="logo" alt="home/logo" /></a>
  <span class="list">Produse</span>
 {#if m}
    <img src={close} alt="" class="close" on:click={openmenu} />
  {:else}
    <img src={menuwhite} alt="" class="menu" on:click={openmenu} />
  {/if}
</main>
 <!--
{#if m}
  <main class="menuopen">
    <a href="/" class="list">Noutati</a>
    <a href="/cromogen" class="list">Mediul Chromogen</a>
    <a href="" class="list">Mediul Nutrient</a>
    <a href="/laborator" class="list">Echipament de Laborator</a>
    <a href="" class="list">Producatori</a>
  </main>
{/if}
-->


<style>
  .list {
    width: 100%;
    height: 100%;
    padding: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }
  .list:hover {
    background: linear-gradient(
      60deg,
      rgb(20, 17, 169) 0%,
      rgb(129, 214, 245) 100%
    );
    color: white;
  }
  .menuopen {
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: column;
    right: 0;
    margin-top: 80px;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 40vh;
    height: 50vh;
    background-color: white;
  }
  .subheader {
    position: fixed;
    z-index: 1;
    padding-inline: 150px;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(
      60deg,
      rgb(129, 214, 245) 0%,
      rgb(20, 17, 169) 100%
    );
  }
  .logo {
    width: 150px;
  }
  .menu {
    width: 50px;
    z-index: 1;
  }
  .close {
    width: 30px;
    z-index: 1;
  }
</style>
