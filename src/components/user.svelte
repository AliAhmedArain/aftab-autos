<script>
    import DataTable from './table.svelte';
  
  
    const columns = [
        { label: 'Email', field: 'email' },
        { label: 'Name', field: 'name' },
        { label: '	User Type', field: 'usertype' },
        { label: 'Invitation Date', field: 'invitationdate' },
        
        { label: '	Status', field: 'status' },
        { label: 'Action', field: 'action' },
    ];
  
    const rows = [
        { email: '1', name: 'John Doe', usertype: '30', invitationdate: 'New York', status: 'john@example.com',action: 123},
        { email: '1', name: 'John Doe', usertype: '30', invitationdate: 'New York', status: 'john@example.com',action: 123},
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
            <h2>USERS</h2>
            <button class="btn btn-success">+ ADD USERS</button>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <button class="btn btn-success">Filters</button>
            <div>
                <button class="btn btn-success">Import</button>
                <button class="btn btn-success">MANAGE ROLE</button>
            </div>
        </div>
    </div>
  
    <DataTable {columns} {rows} {options} />
  </div>
  