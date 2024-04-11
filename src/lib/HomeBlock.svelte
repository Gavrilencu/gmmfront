<script>
  import medii from "$lib/img/teste.webp";
  import teste from "$lib/img/teste.jpeg";
  import echipamente from "$lib/img/echipamente.png";
  import logo from "$lib/img/logo.png";
</script>

<div class="container py-4">
  <header class="pb-3 mb-4 border-bottom">
    <a
      href="/"
      class="d-flex align-items-center text-dark text-decoration-none"
    >
      <img src={logo} class="me-2" alt="" style="width: 120px;" />
      <span class="fs-4">GMM Biotechnology</span>
    </a>
  </header>

  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">GMM BIOTECHNOLOGY</h1>
      <p class="col-md-8 fs-4">
        Oferim un portofoliu extins de produse, inclusiv reactive, kituri de
        testare și echipamente de laborator, pentru a satisface nevoile variate
        ale spitalelor și laboratoarelor din Moldova.
      </p>
      <button class="btn btn-primary btn-lg" type="button"
        >Contacteaza-ne</button
      >
    </div>
  </div>

  <div class="row align-items-md-stretch">
    <div class="col-md-6">
      <div class="h-100 p-5 text-white bg-dark rounded-3">
        <h2>GMM BIOTECHNOLOGY</h2>
        <p>
          Ne străduim să fim partenerul de încredere al spitalelor și
          laboratoarelor din Moldova, oferindu-le soluții integrate și suport
          tehnic specializat pentru implementarea eficientă a testelor PCR.
        </p>
        <a href="/teste" class="btn btn-outline-light" type="button"
          >Teste PCR</a
        >
      </div>
    </div>
    <div class="col-md-6">
      <div class="h-100 p-5 bg-light border rounded-3">
        <h2>GMM BIOTECHNOLOGY</h2>
        <p>
          Suntem partenerul ideal pentru instituțiile medicale din Moldova,
          furnizând produse de cea mai înaltă calitate, precum și asistență
          tehnică specializată.
        </p>
        <a href="/cromogen" class="btn btn-outline-secondary" type="button"
          >Medii de cultura</a
        >
      </div>
    </div>
  </div>

  <footer class="pt-3 mt-4 text-muted border-top">© 2024</footer>
</div>
<main class="infoblock">
  <h2 class="infoName">Ce oferim noi?</h2>
  <div class="block">
    <div class="produs">
      <img src={medii} alt="" class="imgProdus" />
      <span class="descriptionProdus"
        >Mediile de cultură sunt substanțe care conțin nutrienți esențiali
        pentru creșterea și dezvoltarea microorganismelor în laborator. Ele pot
        fi solide (agar) sau lichide și sunt utilizate pentru izolarea,
        identificarea și testarea sensibilității microorganismelor.</span
      >
    </div>
    <div class="produs">
      <img src={teste} alt="" class="imgProdus" />
      <span class="descriptionProdus"
        >Testele PCR (Reacția de Polimerizare în Lanț) sunt metode de diagnostic
        molecular care detectează secvențe specifice de ADN sau ARN ale unui
        agent patogen, oferind o modalitate rapidă și precisă de identificare a
        infecțiilor.</span
      >
    </div>
    <div class="produs">
      <img src={echipamente} alt="" class="imgProdus" />
      <span class="descriptionProdus">
        Echipamentele de laborator includ o varietate de instrumente și
        dispozitive, cum ar fi microscoape, centrifuge, pipete și autoclave,
        folosite pentru experimente științifice, analize și cercetări.</span
      >
    </div>
  </div>
</main>

<style>
  .descriptionProdus {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    text-align: center;
  }
  .imgProdus {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
  .nameOfProdus {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .produs {
    width: 350px;
    height: 400px;
    display: flex;
    box-shadow: 0px 0px 4px rgb(203, 228, 253);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-inline: 50px;
    border-radius: 5px;

    background-color: white;
  }
  .block {
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 30px;
    flex-wrap: wrap;
  }
  .infoName {
    width: 100%;
    text-align: center;
  }
  .infoblock {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    margin-top: 10px;
  }
  * {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  @media screen and (max-width: 1300px) {
    .produs {
      margin-bottom: 20px;
    }
    .block {
      padding: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    .produs {
      width: 100% !important;
    }
  }
</style>
