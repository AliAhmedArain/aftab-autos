<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
</script>



<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
      <!-- Brand with Icon -->
      <a class="navbar-brand" href="#">
          <i class="fas fa-rocket"></i> Aftab Autos
      </a>

      <!-- Toggler for Mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><i class="fas fa-home"></i> Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fas fa-chart-line"></i> Dashboard</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-cogs"></i> Setup
                  </a>
                  <div class="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="userDropdowns">
                      <!-- Lists Section -->
                      <div>
                          <h6 class="dropdown-header text-light">Lists</h6>
                          <a href="#/customer" class="dropdown-item text-light">
                              <i class="fas fa-users me-2"></i>Customer
                          </a>
                          <a href="#/Vendor" class="dropdown-item text-light">
                              <i class="fas fa-truck me-2"></i>Vendors
                          </a>
                          <a class="dropdown-item text-light" href="#/Products">
                              <i class="fas fa-box-open me-2"></i>Products
                          </a>
                          <a class="dropdown-item text-light" href="#/User">
                              <i class="fas fa-user me-2"></i>Users
                          </a>
                      </div>

                      <!-- Categories Section -->
                      <div>
                          <h6 class="dropdown-header text-light">Categories</h6>
                          <a class="dropdown-item text-light" href="#/customerCate">
                              <i class="fas fa-user-tag me-2"></i>Customer Categories
                          </a>
                          <a class="dropdown-item text-light" href="#/vendorcate">
                              <i class="fas fa-truck-moving me-2"></i>Vendor Categories
                          </a>
                          <a class="dropdown-item text-light" href="#/productcate">
                              <i class="fas fa-boxes me-2"></i>Product Categories
                          </a>
                          <a class="dropdown-item text-light" href="#/brand">
                              <i class="fas fa-tags me-2"></i>Brands
                          </a>
                      </div>

                      <!-- General Section -->
                      <div>
                          <h6 class="dropdown-header text-light">General</h6>
                          <a class="dropdown-item text-light" href="#/tax">
                              <i class="fas fa-percent me-2"></i>Tax
                          </a>
                          <a class="dropdown-item text-light" href="#/discount">
                              <i class="fas fa-tag me-2"></i>Discounts
                          </a>
                          <a class="dropdown-item text-light" href="#/warehouse">
                              <i class="fas fa-warehouse me-2"></i>Warehouses
                          </a>
                          <a class="dropdown-item text-light" href="#/mpl">
                              <i class="fas fa-layer-group me-2"></i>Multiple Price Levels
                          </a>
                      </div>

                      <!-- Payroll Section -->
                      <div>
                          <h6 class="dropdown-header text-light">Payroll</h6>
                          <a class="dropdown-item text-light" href="#/employ">
                              <i class="fas fa-user-tie me-2"></i>Employees
                          </a>
                      </div>
                  </div>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fas fa-plus"></i>  Create</a>
                  <div class="dropdown-menu dropdown-menu-dark dropdown-menu-start" aria-labelledby="userDropdown2">
                      <!-- Sale Quotation -->
                      <a href="#/addQuotation" class="dropdown-item text-light">
                          <i class="fas fa-file-invoice-dollar me-2"></i>Sale Quotation
                      </a>

                      <!-- Sale Invoice -->
                      <a href="#/addsaleinvoice" class="dropdown-item text-light">
                          <i class="fas fa-receipt me-2"></i>Sale Invoice
                      </a>

                      <!-- Receive Money -->
                      <a href="#/addrecivemoney" class="dropdown-item text-light">
                          <i class="fas fa-hand-holding-usd me-2"></i>Receive Money
                      </a>

                      <!-- Purchase Order -->
                      <a href="#/addpurchaseorder" class="dropdown-item text-light">
                          <i class="fas fa-file-alt me-2"></i>Purchase Order
                      </a>

                      <!-- Purchase Invoice -->
                      <a class="dropdown-item text-light" href="#/addpurchaseinvoice">
                          <i class="fas fa-file-invoice me-2"></i>Purchase Invoice
                      </a>

                      <!-- Make Payment -->
                      <a class="dropdown-item text-light" href="#/addmakepaymet">
                          <i class="fas fa-money-check-alt me-2"></i>Make Payment
                      </a>

                      <!-- Expense -->
                      <a class="dropdown-item text-light" href="#/addexpance">
                          <i class="fas fa-wallet me-2"></i>Expense
                      </a>
                  </div>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
              </li>
          </ul>
      </div>
  </div>
</nav>


<style>
  /* Navbar Styling */
  .navbar {
      background: #1a1a1a;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 10px 20px;
  }

  /* Brand Styling */
  .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff !important;
      display: flex;
      align-items: center;
  }
  .navbar-brand i {
      margin-right: 10px;
  }

  /* Nav Links Styling */
  .navbar-nav .nav-link {
      color: #fff !important;
      font-size: 1rem;
      margin: 0 10px;
      padding: 8px 15px;
      border-radius: 20px;
      transition: all 0.3s ease;
  }
  .navbar-nav .nav-link:hover {
      background: #333;
      color: #ffdd57 !important;
  }

  /* Dropdown Menu Styling */
  .dropdown-menu {
      background: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .dropdown-item {
      color: #fff !important;
      transition: all 0.3s ease;
  }
  .dropdown-item:hover {
      background: #333;
      color: #ffdd57 !important;
  }

  /* Toggler Icon Styling */
  .navbar-toggler {
      border: none;
      color: #fff;
  }
  .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  /* Responsive Adjustments */
  @media (max-width: 991.98px) {
      .navbar-nav {
          margin-top: 10px;
      }
      .navbar-nav .nav-link {
          margin: 5px 0;
          padding: 10px 15px;
      }
  }
</style>