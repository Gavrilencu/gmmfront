<script>
  import logo from "$lib/img/logo.png";
  import arrow from "$lib/img/bottom.png";
  import menu from "$lib/img/men.png";
  import close from "$lib/img/close.png";

  import { openMenu } from "$lib/index.js";

  import { goto } from "$app/navigation";
  let product = false;

  // // categorii :medii de cultura,cromogene,teste pcr,echipamente de laborator,despre noi,produse,contacte,parteneri
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main class="subheader">
  <img
    src={logo}
    class="logo"
    on:click={() => {
      goto("/");
    }}
  />

  <img
    src={menu}
    alt=""
    class="menuicon"
    on:click={() => {
      openMenu.set(true);
    }}
  />
  <nav class="nav">
    <div
      class="dual"
      on:mouseenter={() => {
        product = true;
      }}
    >
      <span class="list">PRODUSE</span>
      <img src={arrow} alt="" class="icon" />
    </div>

    <span class="list">DESPRE NOI</span>
    <a href="/partner" class="list">PARTENERI</a>
    <span class="list">CONTACTE</span>
  </nav>
  {#if product}
    <div
      class="product flip-in-hor-top"
      on:mouseleave={() => {
        product = false;
      }}
    >
      <span class="listmenu">MEDII DE CULTURA</span>
      <span
        class="listmenu"
        on:click={() => {
          goto("/cromogen");
        }}>MEDII DE CULTURA CROMOGENE</span
      >
      <span class="listmenu">TESTE PCR</span>
      <span class="listmenu">ECHIPAMENTE DE LABORATOR</span>
    </div>
  {/if}
</main>

<style>
  .menuicon {
    width: 50px;
    display: none;
    cursor: pointer;
    z-index: 100;
  }
  .listmenu {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    color: white;
    transition: 0.5s;
    cursor: pointer;
  }
  .listmenu:hover {
    background-color: white;
    color: #114640;
  }
  .product {
    overflow: hidden;
    width: 250px;
    height: 160px;
    background: linear-gradient(60deg, #02b68f 0%, #114640 100%);
    right: 360px;
    top: 80px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.363);
    border-radius: 10px;
  }
  .dual {
    display: flex;
    align-items: center;
  }
  .icon {
    width: 30px;
  }
  * {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  .list {
    color: white;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
  }
  .nav {
    display: flex;
    align-items: center;
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
    background: linear-gradient(60deg, #02b68f 0%, #114640 100%);
  }
  .logo {
    width: 150px;
    cursor: pointer;
  }

  .flip-in-hor-top {
    -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @media screen and (max-width: 1100px) {
    .nav {
      display: none;
    }
    .menuicon {
      display: block;
    }
  }
</style>
