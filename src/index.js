
import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte';
import Home from './Home.svelte';
import Page from './Page.svelte';

// Use `initHashRouter` for hash mode
initPathRouter([
  { path: '/', component: Home },
  { path: '/page', component: Page }
])

const app = new App({
  target: document.body
})

export default app