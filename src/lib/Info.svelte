<script>
  import mail from "./img/mail.png";
  import viber from "./img/viber.png";
  import facebook from "./img/facebook.png";
</script>

<main class="info">
  <div class="mail fb">
    <img src={facebook} alt="" class="ico" />
    <span class="detail">GMMBIOTECHNOLOGY</span>
  </div>
  <div class="mail vb">
    <img src={viber} alt="" class="ico" />
    <span class="detail">079527212</span>
  </div>
  <div class="mail ml">
    <img src={mail} alt="" class="ico" />
    <span class="detail">gmmbiotechnology@gmail.com</span>
  </div>
</main>

<style>
  * {
    font-family: "Lato", sans-serif;
  }
  .detail {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
  }
  .mail {
    width: 40px;
    overflow: hidden;
    height: 40px;
    cursor: pointer;
    transition: 0.3s linear;
  }
  .mail:hover {
    width: auto;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .info {
    position: absolute;
    z-index: 1;
    top: 50%;
  }
  .ico {
    width: 40px;
  }
</style>
