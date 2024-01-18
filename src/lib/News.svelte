<script>
  import { news } from "$lib/news.js";
</script>

<main class="news">
  <span class="text">News</span>
  <div class="newProducts">
    {#each news as list}
      <a href={`/news/${list.id}`} class="box">
        <img class="imgprod" src={list.img} alt="" />
        <span class="name">{list.name}</span>
      </a>
    {/each}
  </div>
</main>

<style>
  .imgprod {
    width: 90%;
  }
  .newProducts {
    margin-top: 100px;
    padding-inline: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .name {
    text-align: center;
    width: 100%;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    margin-top: 10px;
  }
  .box {
    width: 300px;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(24, 96, 221, 0.415);
    border-radius: 20px;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin: 25px;
    align-items: center;
    justify-content: center;
    transition: 0.5s linear;
    cursor: pointer;
  }
  .box:hover {
    box-shadow: 0px 0px 10px rgba(24, 221, 47, 0.415);
    transform: scale3d(1.05, 1.05, 0.5);
  }
  .text {
    width: 100%;
    font-family: "Lato", sans-serif;
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: 600;
  }
  .news {
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }
</style>
