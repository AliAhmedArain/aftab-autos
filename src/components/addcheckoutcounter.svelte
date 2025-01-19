<script>
    let currentPage = 'basic';

    function togglePage(page) {
        currentPage = page;
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>

<div class="container-fluid p-0 vh-100 ">
    <!-- Toggle Buttons -->
    <div class="mb-4">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="toggle" id="basicToggle" bind:group={currentPage} value="basic">
            <label class="form-check-label" for="basicToggle">Basic</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="toggle" id="checkoutToggle" bind:group={currentPage} value="checkout">
            <label class="form-check-label" for="checkoutToggle">Checkout</label>
        </div>
    </div>

    <!-- Basic Page -->
    <div class={currentPage === 'basic' ? '' : 'hidden'}>
        <h3>Checkout Counter - Add</h3>
        <form>
            <div class="mb-3">
                <label for="checkoutCounterName" class="form-label">Checkout Counter Name</label>
                <input type="text" class="form-control" id="checkoutCounterName" placeholder="Checkout Counter Name">
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="warehouse" class="form-label">Warehouse</label>
                    <select class="form-select" id="warehouse">
                        <option selected>Choose...</option>
                    </select>
                </div>
                <div class="col">
                    <label for="cashAccount" class="form-label">Cash Account</label>
                    <select class="form-select" id="cashAccount">
                        <option selected>Choose...</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="posInvoiceSeries" class="form-label">POS Invoice Series</label>
                    <select class="form-select" id="posInvoiceSeries">
                        <option selected>Choose...</option>
                    </select>
                    <button type="button" class="btn btn-success mt-2">Add</button>
                </div>
                <div class="col">
                    <label for="saleReturnSeries" class="form-label">Sale Return Series</label>
                    <select class="form-select" id="saleReturnSeries">
                        <option selected>Choose...</option>
                    </select>
                    <button type="button" class="btn btn-success mt-2">Add</button>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">POS Search</label><br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="saleOrder">
                    <label class="form-check-label" for="saleOrder">Sale Order</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="product" checked>
                    <label class="form-check-label" for="product">Product</label>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Primary Search</label><br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="primarySearch" id="saleOrderSearch">
                    <label class="form-check-label" for="saleOrderSearch">Sale Order</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="primarySearch" id="productSearch" checked>
                    <label class="form-check-label" for="productSearch">Product</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save and Continue Edit</button>
            <button type="button" class="btn btn-secondary">Close</button>
        </form>
    </div>

    <!-- Checkout Page -->
    <div class={currentPage === 'checkout' ? '' : 'hidden'}>
        <h3>Checkout Counter - Add</h3>
        <form>
            <div class="mb-3">
                <label for="checkoutCounterName" class="form-label">Checkout Counter Name</label>
                <input type="text" class="form-control" id="checkoutCounterName" placeholder="Checkout Counter Name">
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="warehouse" class="form-label">Warehouse</label>
                    <select class="form-select" id="warehouse">
                        <option selected>Choose...</option>
                    </select>
                </div>
                <div class="col">
                    <label for="saleOrderSeries" class="form-label">Sale Order Series</label>
                    <select class="form-select" id="saleOrderSeries">
                        <option selected>Choose...</option>
                    </select>
                    <button type="button" class="btn btn-success mt-2">Add</button>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Save and Continue Edit</button>
            <button type="button" class="btn btn-secondary">Close</button>
        </form>
    </div>
</div>
