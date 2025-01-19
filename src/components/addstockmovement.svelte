<div class="container-fluid p-0 vh-100 ">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h5 class="mb-0">Stock Movement - [SM-000001]</h5>
        <span class="badge bg-secondary">DRAFT</span>
    </div>

    <!-- Form Row -->
    <div class="row g-3">
        <div class="col-md-3">
            <label for="fromWarehouse" class="form-label">From Warehouse <span class="text-danger">*</span></label>
            <select class="form-select" id="fromWarehouse">
                <option>SHOP</option>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="toWarehouse" class="form-label">To Warehouse <span class="text-danger">*</span></label>
            <select class="form-select" id="toWarehouse">
                <option>-Choose-</option>
                <option>Warehouse 1</option>
                <option>Warehouse 2</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
            <div class="input-group">
                <button class="btn btn-success" type="button">▼</button>
                <input type="text" class="form-control" id="number" value="SM-000001" readonly>
                <button class="btn btn-success" type="button">
                    <i class="bi bi-arrow-clockwise"></i>
                </button>
            </div>
        </div>
        <div class="col-md-3">
            <label for="date" class="form-label">Date <span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="date" class="form-control" id="date" value="2025-01-12">
                <button class="btn btn-danger" type="button">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="row g-3 mt-3">
        <div class="col-md-3">
            <label for="reference" class="form-label">Reference</label>
            <input type="text" class="form-control" id="reference" placeholder="Reference">
        </div>
    </div>

    <!-- Product Section -->
    <div class="d-flex justify-content-between align-items-center mt-4">
        <h6 class="mb-0">Product</h6>
        <button class="btn btn-success btn-sm">QUICKLY ADD PRODUCTS / SCAN</button>
    </div>
    <div class="table-responsive mt-3">
        <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="text" class="form-control" placeholder="Type to search product">
                        <input type="text" class="form-control mt-2" placeholder="Description">
                    </td>
                    <td>
                        <input type="number" class="form-control" value="0">
                    </td>
                    <td>
                        <button class="btn btn-success btn-sm">
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button class="btn btn-danger btn-sm">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Comments Section -->
    <div class="row g-3 mt-3">
        <div class="col-md-12">
            <label for="comments" class="form-label">Comments</label>
            <textarea class="form-control" id="comments" rows="3"></textarea>
        </div>
    </div>

    <!-- Footer Buttons -->
    <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-outline-danger">CLOSE</button>
        <button class="btn btn-primary" disabled>SAVE AND APPROVE</button>
    </div>
</div>