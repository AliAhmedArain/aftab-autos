<script>
    function toggleFields() {
        const paymentModeElement = document.getElementById('paymentMode');
        const paymentMode = paymentModeElement instanceof HTMLSelectElement ? paymentModeElement.value : '';
        const bankFields = ['bankName', 'instrumentNo', 'instrumentDate'];
        bankFields.forEach(field => {
            const input = document.getElementById(field);
            if (input instanceof HTMLInputElement) {
                input.disabled = paymentMode === 'Cash';
            }
        });
    }
</script>

<div class="container-fluid p-0 vh-100 ">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4 border-bottom p-4">
        <h5 class="mb-0">Vendor Refunds</h5>
        <span class="badge bg-secondary">DRAFT</span>
    </div>

    <!-- Form Row 1 -->
    <div class="row g-3">
        <div class="col-md-4">
            <label for="customer" class="form-label">Vendor <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="customer" placeholder="Type to search customer">
        </div>
        <div class="col-md-2">
            <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="number" value="RM-12047" readonly>
        </div>
        <div class="col-md-2">
            <label for="date" class="form-label">Date <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="date" value="2024-11-26">
        </div>
        <div class="col-md-4">
            <label for="reference" class="form-label">Reference</label>
            <input type="text" class="form-control" id="reference">
        </div>
    </div>

    <!-- Payment Details Table -->
    <div class="table-responsive mt-4">
        <table class="table table-bordered align-middle">
            <thead class="table-light">
            <tr>
                <th style="width: 15%;">Payment Mode</th>
                <th style="width: 15%;">Account</th>
                <th>Reference</th>
                <th>Bank Name</th>
                <th>Instrument No.</th>
                <th>Instrument Date</th>
                <th style="width: 10%;">Amount</th>
                <th style="width: 5%;">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <select class="form-select" id="paymentMode" on:change={toggleFields}>
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </td>
                <td>
                    <select class="form-select">
                        <option>-Choose-</option>
                    </select>
                </td>
                <td>
                    <input type="text" class="form-control" placeholder="Reference">
                </td>
                <td>
                    <input type="text" class="form-control" id="bankName" placeholder="Bank Name" disabled>
                </td>
                <td>
                    <input type="text" class="form-control" id="instrumentNo" placeholder="Instrument No." disabled>
                </td>
                <td>
                    <input type="date" class="form-control" id="instrumentDate" disabled>
                </td>
                <td>
                    <input type="number" class="form-control" value="0">
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

    <!-- Total Amount -->
    <div class="row g-3 mt-3">
        <div class="col-md-6">
            <div class="d-flex justify-content-between align-items-center border p-3">
                <span>Total Amount (PKR)</span>
                <span class="fw-bold">0.00</span>
            </div>
        </div>
    </div>

    <!-- Settlements Table -->
    <div class="form-check mt-3">
        <input type="checkbox" class="form-check-input" id="autoSettlements" checked>
        <label class="form-check-label" for="autoSettlements">Make auto settlements</label>
    </div>
    <div class="table-responsive mt-2">
        <table class="table table-bordered align-middle">
            <thead class="table-light">
            <tr>
                <th style="width: 5%;"><input type="checkbox"></th>
                <th>Description</th>
                <th style="width: 15%;">Date</th>
                <th style="width: 15%;">Due Date</th>
                <th style="width: 10%;">Total Amount</th>
                <th style="width: 10%;">Adjusted Amount</th>
                <th style="width: 10%;">Balance Amount</th>
                <th style="width: 10%;">Allocate</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="8" class="text-center text-muted">No record found</td>
            </tr>
            </tbody>
        </table>
    </div>

    <!-- Footer Buttons -->
    <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-outline-danger">Close</button>
        <button class="btn btn-primary">Save and Approve</button>
    </div>
</div>