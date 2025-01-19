<div class="container-fluid p-0 vh-100">
    <!-- Header Section -->
    <div class="border-bottom p-3">
        <div class="row align-items-center mb-3">
            <div class="col-12 col-md-6">
                <h2 class="h4">Vendor Refunds</h2>
            </div>
            <div class="col-12 col-md-6 text-md-end">
                <a href="#/addpurchaserefund" class="btn btn-success">+ Add Vendor Refunds</a>
            </div>
        </div>
        <div class="row align-items-center mb-4">
            <div class="col-12 col-md-6">
                <button class="btn btn-success">Filters</button>
            </div>
            <div class="col-12 col-md-6 text-md-end mt-2 mt-md-0">
                <div class="d-flex flex-md-row gap-2 justify-content-md-end">
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
                    <th>Customer</th>
                    <th>Reference</th>
                    <th>Total Amount</th>
                    <th>Unadjusted Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>C-100020</td>
                    <td>M</td>
                    <td>M</td>
                    <td></td>
                    <td>H</td>
                    <td></td>
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
                <p><strong>Customer:</strong> M</p>
                <p><strong>Reference:</strong></p>
                <p><strong>Total Amount:</strong> H</p>
                <p><strong>Unadjusted Amount:</strong> 0</p>
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
