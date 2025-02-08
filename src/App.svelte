<script>
  import Nav from './components/Nav.svelte';
  import Sidebar from './components/Sildebar.svelte';
  import Router from 'svelte-spa-router';
  import { routes } from './components/routes.js';

</script>

  <Nav/>
  <div class="app-container">
    <Sidebar />
    <main>
      <Router {routes} />
    </main>
  </div>
  
<style>
  .app-container {
    display: flex;
   
  }
  main {
    flex-grow: 1;
    padding: 1rem;
    
  }
</style>
