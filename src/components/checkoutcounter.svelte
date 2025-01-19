<script>
    import posImage from '../assets/images/pos.png';
</script>

<div class="container-fluid p-0 vh-100">
    <!-- Header Section -->
    <div class="border-bottom p-3">
        <div class="row align-items-center mb-3">
            <!-- Title Section -->
            <div class="col-12 col-md-6">
                <h2 class="h4">Checkout Counters</h2>
            </div>
            <!-- Add Button -->
            <div class="col-12 col-md-6 text-center text-md-end mt-2 mt-md-0">
                <a href="#/addcheckoutcounter" class="btn btn-success">+ Add Checkout Counters</a>
            </div>
        </div>

        <div class="row align-items-center mb-4">
            <!-- Image Section -->
            <div class="col-12 col-md-6 text-center text-md-start">
                <img src={posImage} class="img-fluid" style="max-width: 100%; height: auto;" alt="POS Image">
            </div>
            <!-- Action Buttons -->
            <div class="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
                <button class="btn btn-success mb-2 mb-md-0 me-md-2">Print</button>
                <button class="btn btn-success mb-2 mb-md-0">Export to Excel</button>
            </div>
        </div>
    </div>

    <!-- Table Section -->
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="table-light">
                <tr>
                    <th>Name</th>
                    <th>Cash Account Name</th>
                    <th>Warehouse Name</th>
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
            </tbody>
        </table>
    </div>

    <!-- Pagination Section -->
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center mt-3">
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
    </nav>
</div>
