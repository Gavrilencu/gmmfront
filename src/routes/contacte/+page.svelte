<script>
  import Header from "./../../lib/Header.svelte";
  import Subheader from "../../lib/Subheader.svelte";
  import Footer from "../../lib/Footer.svelte";
  import phone from "../../lib/img/phone.png";
  import mail from "../../lib/img/email.png";
  import address from "../../lib/img/address.png";
</script>

<Subheader />
<Header />
<div class="contact">
  <div class="dualmod">
    <div class="info">
      <div class="block">
        <span class="addr">
          <img src={address} alt="" class="ico" />
          <span class="desc">Telefon</span>
        </span>
        <span class="information">Chisinau Bul Stefan cel Mare 65</span>
        <span class="addr">
          <img src={phone} alt="" class="ico" />
          <span class="desc">Telefon</span>
        </span>
        <span class="information">+373 078 545 612</span>
        <span class="addr">
          <img src={mail} alt="" class="ico" />
          <span class="desc">Mail</span>
        </span>
        <span class="information">info@gmmbiotechnology.md</span>
      </div>
    </div>
    <form class="info1">
      <span class="text">Contacteaza-ne</span>
      <input type="text" required placeholder="Nume Prenume" class="complect" />
      <input type="text" required placeholder="Telefon" class="complect" />
      <input type="text" required placeholder="Email" class="complect" />
      <textarea type="text" placeholder="Mesaj" class="complect"></textarea>
      <div type="submit" class="buton">Trimite</div>
    </form>
  </div>
</div>
<Footer />

<style>
  .information {
    color: rgb(203, 203, 204);
    margin-left: 35px;
  }
  .desc {
    font-weight: 600;
    font-size: 20px;
  }
  .ico {
    width: 25px;
    margin-right: 10px;
  }
  .addr {
    color: white;
    margin-top: 35px;
    display: flex;
    align-items: center;
  }
  .buton {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(44, 118, 175);
    background-color: rgb(44, 118, 175);
    transition: 0.3s;

    color: white;
  }
  .buton:hover {
    color: rgb(18, 142, 147);
    background-color: white;
  }
  .text {
    font-size: 30px;
  }
  .complect {
    width: 80%;
    border: 1px solid rgb(223, 223, 223);
    padding-inline: 10px;
    resize: none;

    display: flex;
    outline: none;
    align-items: center;
    margin-block: 25px;
    height: 50px;
  }
  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-image: url(../../lib/img/adn.jpg);
    background-position: right;
    position: relative;
    background-size: cover;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  /* Adăugarea unui overlay întunecat */
  .info::before {
    content: ""; /* Necesar pentru a afișa pseudo-elementul */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.405); /* Ajustează opacitatea (0.5) pentru a controla întunecimea */
    z-index: 1; /* Asigură-te că overlay-ul este deasupra imaginii de fundal și sub conținut */
  }

  /* Asigură-te că conținutul .info este vizibil peste overlay */
  .info > * {
    position: relative;
    z-index: 2;
  }
  .info1 {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
  }
  .dualmod {
    width: 60%;
    background-color: rgb(249, 249, 249);
    height: 90%;

    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    .dualmod {
      flex-direction: column;
    }
    .info {
      width: 100%;
    }
    .info1 {
      width: 100%;
    }
    .complect {
      margin-block: 5px;
    }
  }
</style>
