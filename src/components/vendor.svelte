<script>
    import DataTable from './table.svelte';

    // Define columns
    const columns = [
        { label: '#Code' , field: 'code' },
        { label: 'Name', field: 'name' },
        { label: 'Category', field: 'category' },
        { label: 'Contact Person', field: 'contactPerson' },
        { label: 'Email', field: 'email' },
        { label: 'Phone', field: 'phone' },
        { label: 'Action', field: 'action' },
    ];

    // Define rows
    const rows = [
        { code: '1', name: 'John Doe', category: '30', contactPerson: 'New York', email: 'john@example.com', phone: '123-456', action: 'Edit' },
        { code: '2', name: 'Jane Smith', category: '25', contactPerson: 'Los Angeles', email: 'jane@example.com', phone: '789-012', action: 'Edit' },
        { code: '3', name: 'Robert Brown', category: '28', contactPerson: 'Chicago', email: 'robert@example.com', phone: '345-678', action: 'Edit' },
        { code: '4', name: 'John Doe', category: '30', contactPerson: 'New York', email: 'john@example.com', phone: '123-456', action: 'Edit' },
        { code: '5', name: 'Jane Smith', category: '25', contactPerson: 'Los Angeles', email: 'jane@example.com', phone: '789-012', action: 'Edit' },
        { code: '6', name: 'Robert Brown', category: '28', contactPerson: 'Chicago', email: 'robert@example.com', phone: '345-678', action: 'Edit' },
   
    ];

    // Additional options
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
            <h2>Vendor</h2>
            <button class="btn btn-success">+ Add Vendor</button>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <button class="btn btn-success">Filters</button>
            <div>
                <button class="btn btn-success">Print</button>
                <button class="btn btn-success">Export to Excel</button>
                <button class="btn btn-success">Import</button>
            </div>
        </div>
    </div>

    <!-- Use the reusable DataTable component -->
    <DataTable {columns} {rows} {options} />
</div>
