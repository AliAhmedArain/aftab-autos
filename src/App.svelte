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
<!-- <script>
  import Table from "./components/Table.svelte";
</script>

<main>
  <h1>Responsive and Stylish Table</h1>
  <Table />
</main>

<style>
  main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }
</style> -->