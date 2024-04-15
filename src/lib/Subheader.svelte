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
<div class="container">
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-0 "
  >
    <a
      href="/"
      class="d-flex align-items-center col-md-4 mb-1 mb-md-1 text-dark text-decoration-none"
    >
      <img src={logo} class="bi me-2" alt="" style="width: 150px;" />
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <a href="/partner" class="nav-link px-20 link-dark">Despre noi</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">Produse</a
        >
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/teste">Teste PCR</a></li>
          <li><a class="dropdown-item" href="/teste">Teste Rapide</a></li>
          <li><a class="dropdown-item" href="/cromogen">Medii cromogene</a></li>
          <li><a class="dropdown-item" href="#">Medii nutriente</a></li>
          <li><a class="dropdown-item" href="#">Echipamente laborator</a></li>
       
        </ul>
      </li>
      <li><a href="/contacte" class="nav-link px-20 link-dark">Contacte</a></li>
      <li>
        <a href="/partner" class="nav-link px-20 link-dark">Parteneri</a>
      </li>
    </ul>
  </header>
</div>

<style>

  .nav-link {
    margin-left: 20px;
    font-size: 18px;
    color: black;
  }
</style>
