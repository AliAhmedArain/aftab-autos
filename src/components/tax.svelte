<div class="container-fluid p-0 vh-100">
    <div>
        <div class="p-3 border-bottom">
            <div class="row align-items-center mb-3">
                <div class="col-12 mb-2">
                    <h2 class="h4">Taxes</h2>
                </div>
                <div class="col-12">
                    <button class="btn btn-success">+ Add taxes</button>
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

        <!-- Desktop Table View -->
        <div class="table-responsive d-none d-md-block">
            <table class="table table-striped table-hover mt-3">
                <thead class="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Abbreviation</th>
                        <th>Rate</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>M</td>
                        <td></td>
                        <td>H</td>
                        <td></td>
                        <td>
                            <button class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-file-earmark-ruled"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Munawar</td>
                        <td>Banda</td>
                        <td>033292339</td>
                        <td></td>
                        <td>
                            <button class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-file-earmark-ruled"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td></td>
                        <td>H</td>
                        <td></td>
                        <td>
                            <button class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-file-earmark-ruled"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Mobile Card View -->
        <div class="d-block d-md-none">
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>Name:</strong> M</p>
                    <p><strong>Abbreviation:</strong></p>
                    <p><strong>Rate:</strong> H</p>
                    <p><strong>Status:</strong></p>
                    <button class="btn btn-outline-primary btn-sm">
                        <i class="bi bi-file-earmark-ruled"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>Name:</strong> Munawar</p>
                    <p><strong>Abbreviation:</strong> Banda</p>
                    <p><strong>Rate:</strong> 033292339</p>
                    <p><strong>Status:</strong></p>
                    <button class="btn btn-outline-primary btn-sm">
                        <i class="bi bi-file-earmark-ruled"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
            <!-- More cards for each item can be added here -->
        </div>

        <!-- Pagination -->
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
</div>
