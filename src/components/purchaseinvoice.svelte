<div class="container-fluid p-0 vh-100">
    <!-- Header Section -->
    <div class="p-3 border-bottom">
        <div class="row align-items-center mb-3">
            <div class="col-12 mb-2">
                <h2 class="h4">Purchase Invoices</h2>
            </div>
            <div class="col-12">
                <a href="#/addpurchaseinvoice" class="btn btn-success">+ Add Purchase Invoices</a>
            </div>
        </div>
        <div class="row align-items-center mb-4">
            <div class="col-12 col-md-6 mb-2 mb-md-0">
                <button class="btn btn-success">Filters</button>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex flex-md-row justify-content-md-end gap-2">
                    <button class="btn btn-success">Print</button>
                    <button class="btn btn-success">Export to Excel</button>
                    <button class="btn btn-success">Other Action</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Table Section -->
    <div class="table-responsive d-none d-md-block">
        <table class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Vendor</th>
                    <th>Reference</th>
                    <th>Due Date</th>
                    <th>Net Amount</th>
                    <th>Balance Amount</th>
                    <th>Status</th>
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
    </div>

    <!-- Mobile Cards Section -->
    <div class="d-block d-md-none">
        <div class="card mb-3">
            <div class="card-body">
                <p><strong>Number:</strong> C-100020</p>
                <p><strong>Date:</strong> M</p>
                <p><strong>Vendor:</strong></p>
                <p><strong>Reference:</strong> H</p>
                <p><strong>Due Date:</strong> 0</p>
                <p><strong>Net Amount:</strong> 0</p>
                <p><strong>Balance Amount:</strong> 0</p>
                <p><strong>Status:</strong> 0</p>
                <button class="btn btn-outline-danger btn-sm">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Pagination Section -->
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center mt-3">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link btn-sm" href="#">1</a></li>
            <li class="page-item"><a class="page-link btn-sm" href="#">2</a></li>
            <li class="page-item"><a class="page-link btn-sm" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
