<script>
  import "$lib/responsiv.css";
  import Header from "../../lib/Header.svelte";
  import Subheader from "../../lib/Subheader.svelte";
  import Footer from "../../lib/Footer.svelte";
  import left from "$lib/img/left.png";
  import tap from "$lib/img/tap.jpg";
  import lab from "$lib/img/lab.jpg";
  import ds from "$lib/img/omniads.jpg";
  let clasone = false;
  let clastwo = false;
  let clasthree = false;
  let clasfor = false;

  function openClassOne() {
    clasone = !clasone;
    clastwo = false;
    clasthree = false;
    clasfor = false;
  }
  function openClassTwo() {
    clastwo = !clastwo;
    clasone = false;
    clasthree = false;
    clasfor = false;
  }
  function openClassThree() {
    clasthree = !clasthree;
    clasone = false;
    clastwo = false;
    clasfor = false;
  }
  function openClassFor() {
    clasfor = !clasfor;
    clasone = false;
    clastwo = false;
    clasthree = false;
  }
</script>

<Subheader />
<Header />
<main class="lab">
  <h4 class="laborator">Sisteme de curatare a apei STAKPURE</h4>
</main>
<div class="echipament">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="leftMenu">
    <a href="#rightDisplay" class="list" on:click={openClassOne}>
      <span class="text">Clasa I</span>
      <img src={left} class="ico" alt="" />
    </a>
    <a href="#rightDisplay" class="list" on:click={openClassTwo}>
      <span class="text">Clasa II</span>
      <img src={left} class="ico" alt="" />
    </a>
    <a href="#rightDisplay" class="list" on:click={openClassThree}>
      <span class="text">Clasa III</span>
      <img src={left} class="ico" alt="" />
    </a>
    <a href="#rightDisplay" class="list" on:click={openClassFor}>
      <span class="text">CLRW</span>
      <img src={left} class="ico" alt="" />
    </a>
  </div>
  <div id="rightDisplay">
    {#if clasone}
      <div class="stak">
        <span class="name"> Clasa I </span>
        <span class="subname">Apă ultrapură</span>
        <span class="descriere"
          >Numeroși factori determină ce sistem de apă ultrapură se va potrivi
          nevoilor dumneavoastră. Disponibilitatea apei de alimentare, cerințele
          zilnice, costurile de achiziție și operare și alte cerințe specifice
          utilizatorului sunt esențiale pentru selectarea sistemului Omnia
          potrivit.</span
        >
        <span class="omnia">OmniaTap</span>
        <img src={tap} alt="" class="photo" />
        <span class="descriere"
          >OmniaTap este sistemul ideal pentru cei care au nevoie de apă curată
          și ultrapură în cantități mici. Combinația de tehnologii moderne de
          purificare vă permite să obțineți apă curată și ultrapură dintr-un
          singur sistem. Poate fi conectat direct la alimentarea cu apă. Apa
          ultrapură de clasa 1 este colectată cu ajutorul unui dozator flexibil.
          Selectarea are loc prin apăsarea unui buton de pe panoul de control al
          dozatorului. Rezervorul incorporat de 10 litri cu sistem de
          recirculare mentine constant calitatea apei de clasa 2. Cu ajutorul
          unei prize suplimentare de presiune la rezervor, apa curată poate fi
          furnizată direct la dispozitivele conectate.</span
        >
        <ul class="tras">
          <span class="trasaturi">Trăsături distinctive</span>
          <li class="li">Operat cu o singura mana</li>
          <li class="li">Alegerea convenabilă a apei</li>
          <li class="li">Locație convenabilă pe masă</li>
          <li class="li">Dozator OptiFill</li>
          <li class="li">
            TapWater-Set - conexiune directă la alimentarea cu apă
          </li>
          <li class="li">Înlocuire simplă și economică a filtrului</li>
          <li class="li">Senzor de scurgere</li>
          <li class="li">Ușor de utilizat, toate filtrele incluse</li>
        </ul>
      </div>
    {:else if clastwo}
      <div class="stak">
        <span class="name"> Clasa II </span>
        <span class="subname">Apa pura</span>
        <span class="descriere"
          >Problemele rezolvate în laborator determină alegerea sistemului Omnia
          adecvat. Apa curată este necesară pentru a funcționa autoclavele și
          mașinile de spălat vase de laborator și pentru a alimenta sistemele de
          apă ultrapură. În funcție de faptul că trebuie să fie produsă în
          același timp doar apă din clasa 2 sau și apă ultrapură din clasa 1,
          aveți de ales
        </span>
        <span class="omnia">OmniaTap</span>
        <img src={tap} alt="" class="photo" />
        <span class="descriere"
          >OmniaTap este sistemul ideal pentru cei care au nevoie de apă curată
          și ultrapură în cantități mici. Combinația de tehnologii moderne de
          purificare vă permite să obțineți apă curată și ultrapură dintr-un
          singur sistem. Poate fi conectat direct la alimentarea cu apă. Apa
          ultrapură de clasa 1 este colectată cu ajutorul unui dozator flexibil.
          Selectarea are loc prin apăsarea unui buton de pe panoul de control al
          dozatorului. Rezervorul incorporat de 10 litri cu sistem de
          recirculare mentine constant calitatea apei de clasa 2. Cu ajutorul
          unei prize suplimentare de presiune la rezervor, apa curată poate fi
          furnizată direct la</span
        >
        <ul class="tras">
          <span class="trasaturi">Trăsături distinctive</span>
          <li class="li">Operat cu o singura mana</li>
          <li class="li">Alegerea convenabilă a apei</li>
          <li class="li">Locație convenabilă pe masă</li>
          <li class="li">Dozator OptiFill</li>
          <li class="li">
            TapWater-Set - conexiune directă la alimentarea cu apă
          </li>
          <li class="li">Înlocuire simplă și economică a filtrului</li>
          <li class="li">Senzor de scurgere</li>
          <li class="li">Ușor de utilizat, toate filtrele incluse</li>
        </ul>
      </div>
    {:else if clasthree}
      <div class="stak">
        <span class="name"> Clasa III </span>
        <span class="subname">Apa cu osmoza inversa</span>
        <span class="descriere"
          >Această calitate a apei este destinată utilizării în cazurile mai
          puțin critice în care o simplă reducere a proporției de săruri,
          silicați și solide în suspensie este suficientă. Această apă este
          ideală pentru pre-curățare, spălare/clătire, alimentarea tuturor
          autoclavelor din oțel inoxidabil, chimie generală, hidroponie,
          generatoare de abur, sterilizatoare, sisteme de alimentare cu apă
          ultrapură clasa 1.</span
        >
        <span class="omnia">OmniaLab Mare</span>
        <img src={lab} alt="" class="photo" />
        <span class="descriere"
          >Atunci când în laborator sunt necesare în mod constant cantități mari
          de apă cu osmoză inversă, se utilizează OmniaLab RO . Sistemul
          îndeplinește standardele internaționale de apă clasa 3. În plus,
          sistemul OmniaLab RO conține 100 de litri de apă cu osmoză inversă
          gata de extras într-un rezervor de stocare. Acest sistem este folosit
          pentru a furniza autoclave, mașini de spălat de laborator,
          umidificatoare și sisteme de apă ultrapură.</span
        >
        <ul class="tras">
          <span class="trasaturi">Trăsături distinctive</span>
          <li class="li">Rezervor de 100 l</li>
          <li class="li">Indicator procentual rezervor plin</li>
          <li class="li">
            Creșterea volumului rezervorului folosind suplimentar module
          </li>
          <li class="li">Dozator OptiFill</li>
          <li class="li">Senzor de scurgere</li>
        </ul>
      </div>
    {:else if clasfor}
      <div class="stak">
        <span class="name"> Clasa II </span>
        <span class="subname">Apă curată pentru laboratoarele clinice</span>
        <span class="descriere"
          >Acest sistem de tratare a apei este conceput pentru alimentarea
          analizoarelor și produce apă curată de laborator clinic (clasa CLRW)
          cu un consum redus de apă și astfel reduce semnificativ costurile cu
          apa de laborator. Apa este cel mai comun reactiv lichid într-un
          analizor clinic. Prin urmare, alegerea sistemului potrivit de
          purificare a apei este cheia pentru buna funcționare a laboratorului
          dumneavoastră.
        </span>
        <span class="omnia">OmniaTapDS</span>
        <img src={ds} alt="" class="photo" />
        <span class="descriere"
          >Când siguranța este pe primul loc și calitatea curățării determină
          calitatea rezultatelor, sistemul OmniaLab DS este soluția ideală.
          OmniaLab DS garantează conformitatea cu standardele internaționale de
          apă pentru tehnologia de laborator și medicală, inclusiv pentru volume
          mari de apă curată, de până la 80 l/h. În combinație cu module de
          deionizare regenerabile și o sursă suplimentară de apă de urgență,
          sistemul este proiectat pentru a furniza în mod fiabil analizoarele
          clinice, precum și pentru a furniza sterilizatoare cu abur și
          dispozitive de curățare și dezinfecție.</span
        >
        <ul class="tras">
          <span class="trasaturi">Trăsături distinctive</span>
          <li class="li">Degazator "optional"</li>
          <li class="li">Alegerea convenabilă a apei</li>
          <li class="li">Locație convenabilă pe masă</li>
          <li class="li">Dozator OptiFill</li>
          <li class="li">
            100 l. rezervor cu circulatie si extractie sub presiune
          </li>
          <li class="li">Înlocuire simplă și economică a filtrului</li>
          <li class="li">Senzor de scurgere</li>
          <li class="li">Indicator procentual rezervor plin</li>
        </ul>
      </div>
    {/if}
  </div>
</div>
<Footer />

<style>
  a {
    text-decoration: none;
    color: rgb(0, 129, 250);
  }
  .li {
    margin-block: 10px;
  }
  .tras {
    margin-top: 30px;
  }
  .trasaturi {
    font-size: 20px;
    color: rgb(0, 129, 250);
  }
  .omnia {
    font-size: 20px;
    color: rgb(0, 129, 250);
    margin-top: 20px;
  }
  .descriere {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.712);
  }
  .subname {
    color: rgb(0, 129, 250);
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .name {
    color: rgb(0, 129, 250);
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .stak {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ico {
    width: 20px;
  }
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .list {
    cursor: pointer;
    width: 100%;
    box-shadow: 0px 0px 4px rgba(0, 114, 167, 0.856);
    margin-block: 10px;
    height: 50px;
    align-items: center;
    font-weight: 600;
    color: rgb(0, 138, 180);
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 20px;
    border-radius: 10px;
    transform: 0.5s;
  }
  .list:hover {
    background-color: rgba(15, 131, 185, 0.637);
    color: white;
  }
  #rightDisplay {
    padding: 20px;
    width: 50%;
    box-shadow: 0px 0px 10px rgba(0, 141, 223, 0.596);
    border-radius: 20px;
  }
  .leftMenu {
    padding: 10px;
    border-radius: 20px;
    width: 25%;
    height: 100%;
    box-shadow: 0px 0px 10px rgba(2, 93, 168, 0.534);
  }

  .echipament {
    margin-top: 50px;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 50px;
  }
  .lab {
    width: 100%;
  }
  .laborator {
    width: 100%;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    text-align: center;
  }
</style>
