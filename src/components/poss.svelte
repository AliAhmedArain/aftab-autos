<script>
    import chImage from '../assets/images/ch.jpg';
</script>

<!-- Main Content -->
<div class="container-fluid p-0 vh-100">
    <div class="card shadow-sm mx-auto my-5" style="max-width: 800px;">
        <div class="card-body">
            <!-- Title -->
            <h5 class="card-title text-center">Select Checkout Counter</h5>
            <p class="card-text text-center">
                A Checkout Counter is a workstation/location that is used by a single operator at POS in Splendid Accounts
                (like a Physical Cash Register). The Checkout Counter can be checked in by only one user at a time.
            </p>

            <!-- Search Input as Select Dropdown -->
            <div class="mb-4">
                <label for="checkoutCounter" class="form-label">Search Checkout Counter</label>
                <select id="checkoutCounter" class="form-select" aria-label="Select Checkout Counter">
                    <option selected disabled>Type To Search Checkout Counter</option>
                    <option value="1">Counter 1</option>
                </select>
            </div>

            <!-- Image -->
            <div class="d-flex justify-content-center my-4">
                <img src={chImage} class="img-fluid rounded" style="max-height: 400px; object-fit: cover;" alt="Checkout Counter">
            </div>

            <!-- Check-In Button -->
            <div class="d-flex justify-content-end">
                <a href="./pos2.html">
                    <button class="btn btn-primary">Check In</button>
                </a>
            </div>
        </div>
    </div>
</div>
