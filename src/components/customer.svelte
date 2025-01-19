<script>
    import {onMount} from "svelte";
    import DataTable from "datatables.net-bs5"; // Import DataTables with Bootstrap 5 integration
    import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"; // Include the CSS

    let table;

    onMount(() => {
        // Initialize DataTable
        const dataTable = new DataTable(table, {
            paging: true,
            searching: true,
            ordering: true,
            pageLength: 5,
            language: {
                search: "Filter:"
            },
            initComplete : function () {
                table
                    .columns()
                    .every(function () {
                        let column = this;
                        let title = column.footer().textContent;

                        // Create input element
                        let input = document.createElement('input');
                        input.placeholder = title;
                        column.footer().replaceChildren(input);

                        // Event listener for user input
                        input.addEventListener('keyup', () => {
                            if (column.search() !== this.value) {
                                column.search(input.value).draw();
                            }
                        });
                    });
            }

        });

        // Clean up DataTable on component unmount
        return () => {
            dataTable.destroy();
        };
    });
</script>

<div class="container-fluid p-0 vh-100 ">
    <div class="p- border-bottom">
        <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 pt-3">
            <h2>Customers</h2>
            <button class="btn btn-success">+ Add Customer</button>
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
    <table bind:this={table} class="table table-striped table-hover mt-3 ">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Los Angeles</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Robert Brown</td>
            <td>28</td>
            <td>Chicago</td>
        </tr>
        </tbody>
    </table>

</div>