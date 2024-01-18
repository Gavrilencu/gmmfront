<script>
  import { page } from "$app/stores";
  import { news } from "$lib/news.js";
  const newsId = $page.params.newsId;
  let product = null;
  for (const x of news) {
    if (x.name == newsId) {
      product = x;
    }
  }
</script>

<main class="news">
  <h1>{product.name}</h1>
  <img src={product.img} alt="" />
</main>
