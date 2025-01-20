<script>
    import DataTable from './table.svelte';
  
  
    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Abbreviation', field: 'abbreviation' },
        { label: 'Action', field: 'action' },
    ];
  
    const rows = [
        {name: 'John Doe', abbreviation: '30',action: 'Edit' },
        {name: 'John Doe', abbreviation: '30',action: 'Edit' },
    ];
  
    const options = {
        paging: true,
        searching: true,
        ordering: true,
        pageLength: 6,
        language: {
            search: "Filter:"
        },
    };
  </script>
  
  <div class="container-fluid p-0 vh-100">
    <div class="p- border-bottom">
        <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 pt-3">
            <h2>Discount</h2>
            <button class="btn btn-success">+ ADD Discount</button>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <button class="btn btn-success">Filters</button>
            <div>
                <button class="btn btn-success">Print</button>
                <button class="btn btn-success">Export to Excel</button>
            </div>
        </div>
    </div>
  
    <DataTable {columns} {rows} {options} />
  </div>
  