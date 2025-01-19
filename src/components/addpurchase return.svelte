<script>
    // Svelte state variables for form inputs
    let vendor = "";
    let number = "PR-000026";
    let date = "2025-01-12";
    let reference = "";
    let subject = "";
    let product = "";
    let quantity = 0;
    let price = 0;
    let discount = 0;
    let amount = 0;
    let comments = "";
    let gross = 0;
    let tax = 0;
    let shippingCharges = 0;
    let roundOff = 0;
    let netPKR = 0;
    let autoSettlements = false;
  </script>
  
  <!-- Bootstrap-based Purchase Returns Form in Svelte -->
  <div class="container-fluid p-0 vh-100 ">
      <!-- Header Section -->
      <div class="d-flex justify-content-between align-items-center mb-4">
          <h4>Purchase Returns - [{number}]</h4>
          <span class="badge bg-secondary">DRAFT</span>
      </div>
  
      <!-- Vendor, Number, Date, Reference Fields -->
      <form on:submit|preventDefault={() => alert('Form submitted!')}>
          <div class="row mb-3">
              <div class="col-md-3">
                  <label for="vendor" class="form-label">Vendor <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="vendor" placeholder="Type to search vendor" bind:value={vendor}>
              </div>
              <div class="col-md-3">
                  <label for="number" class="form-label">Number <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="number" bind:value={number} disabled>
              </div>
              <div class="col-md-3">
                  <label for="date" class="form-label">Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control" id="date" bind:value={date}>
              </div>
              <div class="col-md-3">
                  <label for="reference" class="form-label">Reference</label>
                  <input type="text" class="form-control" id="reference" placeholder="Reference" bind:value={reference}>
              </div>
          </div>
  
          <!-- Subject Field -->
          <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" class="form-control" id="subject" placeholder="Subject" bind:value={subject}>
          </div>
  
          <!-- Product Table -->
          <div class="table-responsive mb-4">
              <table class="table table-bordered">
                  <thead class="table-light">
                      <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Disc.</th>
                          <th>Amount</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="text" class="form-control" placeholder="Type to search product" bind:value={product}></td>
                          <td><input type="number" class="form-control" bind:value={quantity}></td>
                          <td><input type="number" class="form-control" bind:value={price}></td>
                          <td>
                              <div class="input-group">
                                  <input type="number" class="form-control" bind:value={discount}>
                                  <span class="input-group-text">PKR</span>
                              </div>
                          </td>
                          <td><input type="number" class="form-control" bind:value={amount} disabled></td>
                          <td><button type="button" class="btn btn-success">✔</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
  
          <!-- Comments Section -->
          <div class="mb-3">
              <label for="comments" class="form-label">Comments</label>
              <textarea class="form-control" id="comments" rows="3" bind:value={comments}></textarea>
          </div>
  
          <!-- Attachments Section -->
          <div class="mb-3">
              <label class="form-label">Attachments</label>
              <div class="border p-3 text-center">
                  <p class="mb-0">Drop files here or <button type="button" class="btn btn-primary">BROWSE FILES</button></p>
              </div>
          </div>
  
          <!-- Summary Section -->
          <div class="row">
              <div class="col-md-3 offset-md-9">
                  <table class="table table-bordered">
                      <tbody>
                          <tr>
                              <td>Gross</td>
                              <td>{gross.toFixed(2)}</td>
                          </tr>
                          <tr>
                              <td>Discount</td>
                              <td>
                                  <div class="input-group">
                                      <input type="number" class="form-control" bind:value={discount}>
                                      <span class="input-group-text">%</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>Tax</td>
                              <td>{tax.toFixed(2)}</td>
                          </tr>
                          <tr>
                              <td>Shipping Charges</td>
                              <td>{shippingCharges.toFixed(2)}</td>
                          </tr>
                          <tr>
                              <td>Round Off</td>
                              <td>{roundOff.toFixed(2)}</td>
                          </tr>
                          <tr>
                              <td><strong>Net (PKR)</strong></td>
                              <td><strong>{netPKR.toFixed(2)}</strong></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
  
          <!-- Auto Settlements and Table -->
          <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="autoSettlements" bind:checked={autoSettlements}>
              <label class="form-check-label" for="autoSettlements">Make auto settlements</label>
          </div>
  
          <div class="table-responsive">
              <table class="table table-bordered">
                  <thead class="table-light">
                      <tr>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Due Date</th>
                          <th>Total Amount</th>
                          <th>Adjusted Amount</th>
                          <th>Balance Amount</th>
                          <th>Allocate</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td colspan="7" class="text-center">No record found</td>
                      </tr>
                  </tbody>
              </table>
          </div>
  
          <!-- Action Buttons -->
          <div class="d-flex justify-content-end mt-4">
              <button type="submit" class="btn btn-primary me-2">SAVE AND APPROVE</button>
              <button type="button" class="btn btn-secondary">CLOSE</button>
          </div>
      </form>
  </div>
  