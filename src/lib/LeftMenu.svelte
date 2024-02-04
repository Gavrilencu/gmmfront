<script>
  import { openMenu } from "$lib/index.js";
  import { goto } from "$app/navigation";
</script>

{#if $openMenu}
  <div class="all">
    <div class="left-menu">
      <div class="menu slide-in-left">
        <span class="list">MEDII DE CULTURA</span>
        <a href="/cromogen" class="list" on:click={() => menuStore.close()}
          >MEDII DE CULTURA CROMOGENE</a
        >
        <span on:click={() => menuStore.close()} class="list">TEST PCR</span>
        <span on:click={() => menuStore.close()} class="list"
          >ECHIPAMENTE DE LABORATOR</span
        >
        <span on:click={() => menuStore.close()} class="list">DESPRE NOI</span>
        <span on:click={() => menuStore.close()} class="list">CONTACTE</span>
        <a
          href="/partner"
          on:click={() => {
            openMenu.set(false);
          }}
          class="list">PARTENERI</a
        >
      </div>
    </div>
    <div
      class="alt"
      on:click={() => {
        openMenu.set(false);
      }}
    ></div>
  </div>
{/if}

<style>
  .alt {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.719);
  }
  .menuleftall {
    width: 100%;
    height: 100vh;
  }
  .list:hover {
    background-color: white;
    color: #114640;
  }
  * {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
  }
  .list {
    margin-block: 20px;
    width: 100%;
    padding-left: 20px;
    padding-block: 10px;
    color: white;
    text-decoration: none;
  }
  .menu {
    width: 300px;
    height: 100vh;
    z-index: 5;
    background: linear-gradient(60deg, #114640 0%, #02b68f 100%);
    color: white;

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info {
    position: fixed;
    z-index: 1;
    top: 50%;
  }
  .left-menu {
    /* Stilizarea meniului */

    left: 0;
    top: 0;
    width: 250px; /* Lățimea meniului */
    height: 100%; /* Înălțimea completă a ferestrei */
    background-color: #f3f3f3; /* Culoarea de fundal */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Umbră pentru un aspect mai bun */
    z-index: 1000; /* Asigură-te că este peste alte elemente */
  }
  .all {
    width: 100%;
    height: 100%;
    z-index: 5;
    position: fixed;
    display: flex;
  }
</style>
