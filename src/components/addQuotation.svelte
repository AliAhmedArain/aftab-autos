<div class="container-fluid p-0 vh-100 " style="width: 1550px;">

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4 border-bottom p-4">
        <h5 class="mb-0">Sale Quotations - [SQ-000005]</h5>
        <span class="badge bg-secondary">DRAFT</span>
    </div>

    <!-- Form Row 1 -->
    <div class="row g-3">
        <div class="col-md-4">
            <label for="customer" class="form-label">Customer <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="customer" placeholder="Type to search customer">
        </div>
        <div class="col-md-2">
            <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="number" value="SQ-000005" readonly>
        </div>
        <div class="col-md-2">
            <label for="date" class="form-label">Date <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="date" value="2024-11-26">
        </div>
        <div class="col-md-2">
            <label for="expiry-date" class="form-label">Expiry Date <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="expiry-date" value="2024-12-26">
        </div>
        <div class="col-md-2 d-flex align-items-end">
            <button class="btn btn-success w-100">Quickly Add Products /Scan</button>
        </div>
    </div>

    <!-- Form Row 2 -->
    <div class="row g-3 mt-3">
        <div class="col-md-6">
            <label for="reference" class="form-label">Reference</label>
            <input type="text" class="form-control" id="reference">
        </div>
        <div class="col-md-6">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject">
        </div>
    </div>

    <!-- Product Table -->
    <div class="table-responsive mt-3">
        <table class="table table-bordered align-middle">
            <thead class="table-light">
            <tr>
                <th style="width: 30%;">Product</th>
                <th>Description</th>
                <th style="width: 10%;">Quantity</th>
                <th style="width: 10%;">Price</th>
                <th style="width: 10%;">Disc.</th>
                <th style="width: 10%;">Amount</th>
                <th style="width: 5%;">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input type="text" class="form-control" placeholder="Type to search product">
                </td>
                <td>
                    <textarea class="form-control" rows="1"></textarea>
                </td>
                <td>
                    <input type="number" class="form-control" value="0">
                </td>
                <td>
                    <input type="number" class="form-control" value="0">
                </td>
                <td class="d-flex">
                    <input type="number" class="form-control" value="0">
                    <select class="form-select ms-2">
                        <option>PKR</option>
                    </select>
                </td>
                <td>
                    <input type="number" class="form-control" value="0" readonly>
                </td>
                <td>
                    <button class="btn btn-outline-secondary btn-sm">
                        <i class="bi bi-check-lg"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <!-- Terms and Attachments -->
    <div class="row g-3 mt-3">
        <div class="col-md-6">
            <label for="terms" class="form-label">Terms</label>
            <textarea class="form-control" id="terms" rows="3"></textarea>
        </div>
        <div class="col-md-6">
            <label class="form-label">Attachments</label>
            <div class="border p-3">
                <input type="file" class="form-control mb-2">
                <button class="btn btn-primary">Browse Files</button>
            </div>
        </div>
    </div>

    <!-- Totals -->
    <div class="row g-3 mt-3">
        <div class="col-md-6"></div>
        <div class="col-md-6">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Gross</td>
                        <td class="text-end">0.00</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td class="text-end">
                            <div class="input-group">
                                <input type="number" class="form-control" value="0">
                                <span class="input-group-text">%</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td class="text-end">0.00</td>
                    </tr>
                    <tr>
                        <td>Shipping Charges</td>
                        <td class="text-end">0</td>
                    </tr>
                    <tr>
                        <td>Net (PKR)</td>
                        <td class="text-end fw-bold">0.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Footer Buttons -->
    <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-outline-danger">Close</button>
        <button class="btn btn-primary">Save and Approve</button>
    </div>
</div>