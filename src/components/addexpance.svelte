    <div class="container-fluid p-0 vh-100 " style="width: 1550px;">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
            <h5 class="mb-0">Expenses - [E-000201]</h5>
            <span class="badge bg-secondary">DRAFT</span>
        </div>

        <!-- Form Row 1 -->
        <div class="row g-3">
            <div class="col-md-3">
                <label for="payFrom" class="form-label">Pay From <span class="text-danger">*</span></label>
                <select class="form-select" id="payFrom">
                    <option>Counter Cash</option>
                    <option>Bank Account</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
                <div class="input-group">
                    <input type="text" class="form-control" id="number" value="E-000201" readonly>
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
            <div class="col-md-3">
                <label for="contact" class="form-label">Contact</label>
                <input type="text" class="form-control" id="contact" placeholder="Type to search contact">
            </div>
        </div>

        <!-- Table -->
        <div class="table-responsive mt-4">
            <table class="table table-bordered">
                <thead class="table-light">
                    <tr>
                        <th style="width: 30%;">Expense Account</th>
                        <th style="width: 40%;">Description</th>
                        <th style="width: 15%;">Amount</th>
                        <th style="width: 15%;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" class="form-control" placeholder="Type to search account">
                        </td>
                        <td>
                            <input type="text" class="form-control" placeholder="Description">
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

        <!-- Comments and Attachments -->
        <div class="row g-3 mt-3">
            <div class="col-md-6">
                <label for="comments" class="form-label">Comments</label>
                <textarea class="form-control" id="comments" rows="3"></textarea>
            </div>
            <div class="col-md-6">
                <label class="form-label">Attachments</label>
                <div class="border p-3">
                    <input type="file" class="form-control mb-2">
                    <button class="btn btn-primary">Browse Files</button>
                </div>
            </div>
        </div>

        <!-- Summary -->
        <div class="row g-3 mt-3">
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between border p-2">
                    <span>Gross</span>
                    <span>0.00</span>
                </div>
                <div class="d-flex justify-content-between border p-2">
                    <span>Tax</span>
                    <span>0.00</span>
                </div>
                <div class="d-flex justify-content-between border p-2">
                    <strong>Net (PKR)</strong>
                    <strong>0.00</strong>
                </div>
            </div>
        </div>

        <!-- Footer Buttons -->
        <div class="d-flex justify-content-between mt-3">
            <button class="btn btn-outline-danger">Close</button>
            <button class="btn btn-primary">Save and Approve</button>
        </div>
    </div>