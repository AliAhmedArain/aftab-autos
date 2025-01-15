<script>
  import Nav from './components/Nav.svelte';
  import Loginpage from './components/loginpage.svelte';
  import Sidebar from './components/Sildebar.svelte';
  import Router from 'svelte-spa-router';
  import { routes } from './components/routes.js';
  import { writable } from 'svelte/store';

  // Reactive variable to track login state
  let isLoggedIn = writable(false);

  // Function to handle login
  function handleLogin(email, password) {
   
    isLoggedIn.set(true);
  }
</script>

{#if $isLoggedIn}
  <Nav/>
  <div class="app-container">
    <Sidebar />
    <main>
      <Router {routes} />
    </main>
  </div>
{:else}
  <Loginpage on:login={handleLogin} />
{/if}

<style>
  .app-container {
    display: flex;
   
  }
  main {
    flex-grow: 1;
    padding: 1rem;
    
  }
</style>