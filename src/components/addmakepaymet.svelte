<div class="container-fluid p-0 vh-100 " style="width: 1550px;">

    <div class=" d-flex justify-content-between align-items-center border-bottom p-3 pb-2">
        <h5 class="mb-0">Make Payments - [PY-1830]</h5>
        <span class="badge bg-secondary">DRAFT</span>
    </div>
    <div class="card-body">
        <!-- Customer and Invoice Details -->
        <div class="row g-3 pt-3">
            <div class="col-md-4">
                <label for="customer" class="form-label">Vendor *</label>
                <input type="text" id="customer" class="form-control" placeholder="Type to search customer">
            </div>
            <div class="col-md-2">
                <label for="invoiceNumber" class="form-label">Number *</label>
                <div class="input-group">
                    <select class="form-select">
                        <option selected>SI-14365</option>
                    </select>
                    <button class="btn btn-success" type="button">&#8635;</button>
                </div>
            </div>
            <div class="col-md-3">
                <label for="date" class="form-label">Date *</label>
                <input type="date" id="date" class="form-control" value="2024-11-26">
            </div>
        </div>

        <!-- Product Table -->
        <div class="table-responsive mt-4">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Payment Mode</th>
                    <th>account</th>
                    <th>	Document No.</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div class="input-group">
                            <select class="form-select">
                                <option selected>cash</option>
                                <option selected>cheque</option>
                                <option selected>draft</option>
                            </select>
                        </div>
                        <textarea class="form-control mt-2" placeholder="Description"></textarea>
                    </td>

                    <td>                <div class="input-group">
                        <select class="form-select">
                            <option selected>Aftab</option>
                        </select>
                    </div></td>

                    <td><input type="number" class="form-control" value="0"></td>
                    <td>
                        <button class="btn btn-success btn-sm">✔</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <button class="btn btn-success mb-3">QUICKLY ADD PRODUCTS / SCAN</button>

        <!-- Footer Section -->
        <textarea class="form-control mb-3" rows="2" placeholder="Thanks For Purchasing !!!!!!!"></textarea>

        <!-- Attachments -->
        <div class="mb-4">
            <label class="form-label">Attachments</label>
            <div class="border p-3">
                <input type="file" class="form-control mb-2">
                <button class="btn btn-primary">Browse Files</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="d-flex justify-content-between">
                <div>Gross</div>
                <div>0.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Discount</div>
                <div>
                    <input type="number" class="form-control d-inline-block" style="width: 80px;" value="0">
                    %
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Tax</div>
                <div>0.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Shipping Charges</div>
                <div>0</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Round Off</div>
                <div>0</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Net (PKR)</div>
                <div>0.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>Balance (PKR)</div>
                <div>0.00</div>
            </div>
        </div>
    </div>
    <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-secondary me-2">Close</button>
        <button class="btn btn-primary">Save and Approve</button>
    </div>
</div>