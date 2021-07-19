<script>
  import { RouterView, Link } from '@bjornlu/svelte-router'
</script>

<main>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/page">Page</Link>
  </nav>
  <RouterView />
</main>