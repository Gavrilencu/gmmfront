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
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center col-md-4 mb-1 mb-md-1 text-dark text-decoration-none"
    >
      <img src={logo} class="bi me-2" alt="" style="width: 120px;" />
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">Dropdown</a
        >
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </li>
      <li><a href="#" class="nav-link px-2 link-dark">Contacte</a></li>
      <li>
        <a href="/partner" class="nav-link px-2 link-dark">Parteneri</a>
      </li>
    </ul>

    <div class="col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2">Login</button>
    </div>
  </header>
</div>

<style>
</style>
