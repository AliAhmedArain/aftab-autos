<div class="container-fluid p-0 vh-100">
    <div class="p-3 border-bottom">
        <div class="row align-items-center mb-3">
            <div class="col-12 mb-2">
                <h2 class="h4">Employees</h2>
            </div>
            <div class="col-12">
                <button class="btn btn-success">+ Add Employees</button>
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
                    <button class="btn btn-success">Import</button>
                </div>
            </div>
        </div>
    </div>

    <div class="table-responsive d-none d-md-block">
        <table class="table table-striped table-hover mt-3">
            <thead class="table-light">
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Roaster Name</th>
                    <th>Application User Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="https://via.placeholder.com/32" class="rounded-circle me-2" alt="User"><a href="#" class="text-decoration-none">C-100020</a></td>
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

    <div class="d-block d-md-none">
        <div class="card mb-3">
            <div class="card-body">
                <p><strong>Code:</strong> C-100020</p>
                <p><strong>Name:</strong> M</p>
                <p><strong>Department:</strong></p>
                <p><strong>Designation:</strong> H</p>
                <p><strong>Roaster Name:</strong></p>
                <p><strong>Application User Email:</strong> 0</p>
                <button class="btn btn-outline-danger btn-sm">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>

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
