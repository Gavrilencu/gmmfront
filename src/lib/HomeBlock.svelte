<script>
  import medii from "$lib/img/teste.webp";
  import teste from "$lib/img/teste.jpeg";
  import echipamente from "$lib/img/echipamente.png";
</script>

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
    text-align: center;
  }
  .imgProdus {
    width: 100%;
    height: 250px;
    border-radius: 20px;
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
    border-radius: 20px;
    padding: 10px;
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
    margin-top: 20px;
    padding-block: 50px;
    background-color: aliceblue;
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
