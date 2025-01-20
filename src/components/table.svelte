<script>
    import { onMount } from "svelte";
    import DataTable from "datatables.net-bs5";
    import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

    export let columns = [];
    export let rows = []; 
    export let options = {};

    let tableElement;

    onMount(() => {
        const dataTable = new DataTable(tableElement, {
            data: rows,
            columns: columns.map(col => ({ title: col.label, data: col.field })),
            ...options, 
        });


        return () => {
            dataTable.destroy();
        };
    });
</script>

<div class="table-responsive">
    <table bind:this={tableElement} class="table table-striped table-hover mt-3"></table>
</div>
