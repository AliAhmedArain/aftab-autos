<script>
  import { fade } from "svelte/transition";

  export let data = [];
  export let itemsPerPage = 5;
  export let searchPlaceholder = "Search by name...";
  export let filterOptions = [
    { value: "all", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Pending", label: "Pending" },
  ];

  let searchQuery = "";
  let filterStatus = "all";
  let currentPage = 1;

  // Filter and search logic
  $: filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  $: paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  $: totalPages = Math.ceil(filteredData.length / itemsPerPage);
</script>

<style>
  .table-container {
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .search-filter {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
  }

  input,
  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  input {
    flex: 1;
  }

  .icon {
    margin-right: 8px;
    color: #666;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .pagination button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #f8f9fa;
    cursor: pointer;
  }

  .pagination button:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
</style>

<div class="search-filter">
  <div>
    <span class="icon">🔍</span>
    <input type="text" bind:value={searchQuery} placeholder={searchPlaceholder} />
  </div>
  <div>
    <span class="icon">⛳</span>
    <select bind:value={filterStatus}>
      {#each filterOptions as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
  </div>
</div>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Age</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {#each paginatedData as item (item.id)}
        <tr transition:fade>
          <td><img src={item.avatar} alt={item.name} class="avatar" /></td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.status}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="pagination">
  <button on:click={() => currentPage--} disabled={currentPage === 1}>Previous</button>
  <span>Page {currentPage} of {totalPages}</span>
  <button on:click={() => currentPage++} disabled={currentPage === totalPages}>Next</button>
</div>