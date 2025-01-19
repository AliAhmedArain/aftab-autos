<div class="container-fluid p-0 vh-100 ">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4 border-bottom p-4">
        <h5 class="mb-0">Purchase Orders - [PO-000239]</h5>
        <span class="badge bg-secondary">DRAFT</span>
    </div>

    <!-- Form Row 1 -->
    <div class="row g-3">
        <div class="col-md-4">
            <label for="vendor" class="form-label">Vendor <span class="text-danger">*</span></label>
            <select class="form-select" id="vendor">
                <option selected>Muslim Autos (V-000001)</option>
                <option>Vendor 2</option>
                <option>Vendor 3</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="number" value="PO-000239" readonly>
        </div>
        <div class="col-md-2">
            <label for="date" class="form-label">Date <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="date" value="2024-11-26">
        </div>
        <div class="col-md-2">
            <label for="receiptDate" class="form-label">Receipt Date <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="receiptDate" value="2024-11-26">
        </div>
    </div>

    <!-- Form Row 2 -->
    <div class="row g-3 mt-3">
        <div class="col-md-4">
            <label for="reference" class="form-label">Reference</label>
            <input type="text" class="form-control" id="reference" placeholder="Reference">
        </div>
        <div class="col-md-4">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Subject">
        </div>
        <div class="col-md-4 d-flex align-items-end">
            <button class="btn btn-success w-100">Quickly Add Products / Scan</button>
        </div>
    </div>

    <!-- Product Details Table -->
    <div class="table-responsive mt-4">
        <table class="table table-bordered align-middle">
            <thead class="table-light">
            <tr>
                <th style="width: 20%;">Product</th>
                <th style="width: 20%;">Description</th>
                <th style="width: 10%;">Quantity</th>
                <th style="width: 10%;">Price</th>
                <th style="width: 10%;">Disc.</th>
                <th style="width: 15%;">Amount</th>
                <th style="width: 5%;">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input type="text" class="form-control" placeholder="Type to search product">
                </td>
                <td>
                    <input type="text" class="form-control" placeholder="Description">
                </td>
                <td>
                    <input type="number" class="form-control" value="0">
                </td>
                <td>
                    <input type="number" class="form-control" value="0">
                </td>
                <td class="d-flex align-items-center">
                    <input type="number" class="form-control me-2" value="0">
                    <select class="form-select w-auto">
                        <option>PKR</option>
                        <option>USD</option>
                    </select>
                </td>
                <td>
                    <input type="number" class="form-control" value="0" readonly>
                </td>
                <td>
                    <button class="btn btn-outline-secondary btn-sm" aria-label="Confirm">
                        <i class="bi bi-check-lg"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <!-- Footer Section -->
    <div class="row mt-4">
        <div class="col-md-6">
            <textarea class="form-control" rows="3" placeholder="Comments"></textarea>
        </div>
        <div class="col-md-6">
            <div class="d-flex justify-content-end">
                <div class="me-3">
                    <p class="mb-2">Gross:</p>
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2">Tax:</p>
                    <p class="mb-0">Net (PKR):</p>
                </div>
                <div>
                    <p class="mb-2 text-end">0.00</p>
                    <div class="d-flex align-items-center mb-2">
                        <input type="number" class="form-control w-50 me-2" value="0">
                        <span>%</span>
                    </div>
                    <p class="mb-2 text-end">0.00</p>
                    <p class="mb-0 text-end">0.00</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Attachments -->
    <div class="mt-3">
        <label for="attachments" class="form-label">Attachments</label>
        <div class="border p-3">
            <input type="file" id="attachments" class="form-control mb-2">
            <button class="btn btn-primary">Browse Files</button>
        </div>
    </div>

    <!-- Footer Buttons -->
    <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-outline-danger">Close</button>
        <button class="btn btn-primary">Save and Approve</button>
    </div>
</div>