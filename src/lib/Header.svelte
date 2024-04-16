<script>
  import image1 from "$lib/img/image1.jpg";
  import image2 from "$lib/img/image.jpg";
  import image3 from "$lib/img/image3.jpg";
</script>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={image1} class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">Teste PCR</h5>
        <p class="white">Testele PCR, care detectează secvențe specifice de ADN sau ARN, sunt fundamentale în diagnosticarea bolilor, cercetarea genetică și monitorizarea sănătății publice.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image2} class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">ADN</h5>
        <p class="white">
          ADN-ul (acidul dezoxiribonucleic) este materialul genetic esențial care ghidează dezvoltarea și funcționarea tuturor organismelor vii</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image3} class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">Medii Nutriente</h5>
        <p class="white">Nutrienții importați sunt esențiali pentru cultivarea diverselor tipuri de celule și microorganisme în cercetările biologice și medicale.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<style>
  .carousel-inner, .carousel-item, .imageconfig {
    height: 70vh !important;
    object-fit: cover;
  }
  .imageconfig {
    width: 100% !important;
  }
  .white {
    color: white;
  }
</style>
