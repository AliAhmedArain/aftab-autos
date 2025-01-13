<div class="container-fluid p-0 vh-100 " style="width: 1550px;">
    <div class="p- border-bottom">
        <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 pt-3">
            <h2>Purchase Invoices</h2>
            <a href="#/addpurchaseinvoice"><button class="btn btn-success">+ Add Purchase Invoices</button></a>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <button class="btn btn-success">Filters</button>
            <div>
                <button class="btn btn-success">Print</button>
                <button class="btn btn-success">Export to Excel</button>
                <button class="btn btn-success">other action</button>
            </div>
        </div>
    </div>
    <table class="table table-striped table-hover mt-3 ">
        <thead class="table-light">
        <tr>
            <!--            <th><input type="checkbox" checked></th>-->
            <th>Number</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>reference</th>
            <th>Due Date </th>
            <th>net amount</th>
            <th>balance amount</th>
            <th>status</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>

            <td>C-100020</td>
            <td>M</td>
            <td></td>
            <td>H</td>

            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
                <button class="btn btn-outline-danger btn-sm">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        </tbody>
    </table>
    <!--    <nav aria-label="Page navigation ">-->
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</div>