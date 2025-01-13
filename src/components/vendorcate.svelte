<div class="container-fluid p-0 vh-100 " style="width: 1550px;">
    <!-- Card for Customer Categories Section -->
    <div class="card shadow-sm vh-100">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="m-0">Vendor Categories</h5>
            <button class="btn btn-success">+ Add vendor Category</button>
        </div>
        <div class="card-body">
            <!-- Search and Action Buttons -->
            <div class="d-flex justify-content-between mb-4 align-items-center">
                <form class="d-flex" role="search">
                    <input class="border-2 rounded-lg mr-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success btn-md " type="submit">Search</button>
                </form>
                <div>
                    <button class="btn btn-primary me-2">Print</button>
                    <button class="btn btn-primary">Export to Excel</button>
                </div>
            </div>
            <!-- Categories Table -->
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle">
                    <thead class="table-light">
                    <tr>
                        <th>Name</th>
                        <th class="text-end">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Retail Shop Keeper</td>
                        <td class="text-end">
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Denter</td>
                        <td class="text-end">
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mechanic</td>
                        <td class="text-end">
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Whole Sale Shop Keeper</td>
                        <td class="text-end">
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-3">
                <nav>
                    <ul class="pagination mb-0">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">&lt;</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">&gt;</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>