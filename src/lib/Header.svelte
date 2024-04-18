<script>
  import { onMount } from "svelte";
  import image1 from "$lib/img/image1.jpg";
  import image2 from "$lib/img/image.jpg";
  import image3 from "$lib/img/image3.jpg";
  onMount(() => {
  const carouselElement = document.querySelector('#carouselExampleDark');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      ride: 'carousel'
    });
  }
});
</script>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="{image1}" class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">TESTE PCR</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="{image2}" class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">TESTE RAPIDE</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="{image3}" class="d-block w-100 imageconfig" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="white">MEDII NUTRIENTE</h5>
      </div>
    </div>
  </div>

</div>


<style>
  .carousel-inner, .carousel-item, .imageconfig {
    height: 68vh !important;
    object-fit: cover;
    margin-top: 30px;
  }
  .imageconfig {
    width: 100% !important;
  }
  .white {
    color: white;
  }
</style>
