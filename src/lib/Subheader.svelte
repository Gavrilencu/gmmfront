<script>
  import logo from "$lib/img/logo.png";
  import facebook from "$lib/img/facebook.png";
  import whatsapp from "$lib/img/whatsapp.png";
  import linkedin from "$lib/img/linkedin.png";
  import gmail2 from "$lib/img/googs.png";
  import { goto } from "$app/navigation";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" style="width: 150px;">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-0 mb-lg-0 align-items-center">
        <li class="nav-item">
          <a class="nav-link" href="/about">Despre noi</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produse
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/teste">Teste PCR</a></li>
            <li><a class="dropdown-item" href="/teste">Teste Rapide</a></li>
            <li><a class="dropdown-item" href="/cromogen">Medii cromogene</a></li>
            <li><a class="dropdown-item" href="#">Medii nutriente</a></li>
            <li><a class="dropdown-item" href="#">Echipamente laborator</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contacte">Contacte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/partner">Parteneri</a>
        </li>
        <li class="nav-item d-flex align-items-center incons">
          <a href="https://www.facebook.com/people/GMM-Biotechnology/61558317789932/?mibextid=kFxxJD" target="_blank">
            <img src={facebook} alt="Facebook" class="icon mx-1">
          </a>
          <a href="https://wa.me/37378772200" target="_blank">
            <img src={whatsapp} alt="WhatsApp" class="icon mx-1">
          </a>
          <a href="www.linkedin.com/in/gmm-biotechnology-465510304" target="_blank">
            <img src={linkedin} alt="LinkedIn" class="icon mx-1">
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCBBXjqgsNZNJPfRLpBXkpMPdXGXSQzWJjKhHbntqFNtNcRPnpLlDpJMxMkktPNrfXpSvV" target="_blank">
            <img src={gmail2} alt="Gmail" class="icon mx-1">
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-link {
    font-weight: 600;
    text-transform: uppercase;
  }
  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
  }
  .icon:hover {
    transform: scale(1.05);
  }
  .nav-link:hover {
    color: #007bff; /* Bootstrap primary color */
  }
  .dropdown-menu-end {
    right: 0;
    left: auto; /* Aligns the dropdown to the right side of the dropdown button */
  }
  .incons {
    margin-left: 30px;
  }
  .navbar {
    padding-inline: 60px;
  }
</style>
