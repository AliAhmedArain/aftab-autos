<script>
  import logo from "../assets/images/logo.png";
</script>

<div class="container-fluid p-0">

  <nav class="navbar navbar-light border-bottom custom-bg-c d-lg-none  p-0 bg-danger">  
    <div class="container-fluid">
      <div class="align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img src={logo} alt="Logo" class="img-fluid" style="height: 70px;" />

        <strong class="text-success">AFTAB</strong>
        <span class="text-muted">AUTOS</span>
      </div>
      <!-- Collapsible Content -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="nav flex-column mt-4">
          <!-- Dashboards -->
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-dashboards"
            >
              <span
                ><i class="bi bi-calendar4-range mr-2"></i>Dashboard</span
              >
            </a>
          </li>

          <!-- Customers -->
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-sales1"
            >
              <span><i class="bi bi-clipboard-data-fill mr-2"></i>SALES</span>
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-sales1">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/quotation" class="nav-link text-dark">Quotation</a>
                </li>
                <li>
                  <a href="#/invoice" class="nav-link text-dark"
                    >invoice</a
                  >
                </li>
                <li>
                  <a href="#/salereturn" class="nav-link text-dark"
                    >return</a
                  >
                </li>
                <li>
                  <a href="#/recivemoney" class="nav-link text-dark"
                    >receive money</a
                  >
                </li>
                <li>
                  <a href="#/refund" class="nav-link text-dark"
                    >refund</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <!-- Projects -->
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-PURCHASE1"
            >
              <span><i class="bi bi-bag-check-fill mr-2"></i>PURCHASE</span
              >
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-PURCHASE1">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/purchaseorder" class="nav-link text-dark"
                    >order</a
                  >
                </li>
                <li>
                  <a href="#/purchaseinvoice" class="nav-link text-dark"
                    >invoice</a
                  >
                </li>
                <li>
                  <a href="#/purchasereturn" class="nav-link text-dark"
                    >return</a
                  >
                </li>
                <li>
                  <a href="#/purchasemakepayment" class="nav-link text-dark"
                    >make payment</a
                  >
                </li>
                <li>
                  <a href="#/purchaserefund" class="nav-link text-dark"
                    >refund</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <!-- Account -->
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-pos1"
            >
              <span><i class="bi bi-pc-display-horizontal mr-2"></i>POS</span>
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-pos1">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/checkoutcounter" class="nav-link text-dark"
                    >Checkout counter</a
                  >
                </li>
                <li>
                  <a href="#/poss" class="nav-link text-dark">pos</a>
                </li>
              </ul>
            </div>
          </li>

          <!-- Add similar sections for Orders, Posts, Authentication -->
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-account1"
            >
              <span><i class="bi bi-menu-button mr-2"></i>ACCOUNTS</span
              >
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-account1">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/expanseaccount" class="nav-link text-dark"
                    >Expense</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-inventory1"
            >
              <span
                ><i class="bi bi-bank mr-2"></i>INVENTORY</span
              >
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-inventory1">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/stock-movement" class="nav-link text-dark"
                    >stock movement</a
                  >
                </li>
                <li>
                  <a href="#/stockadjustment" class="nav-link text-dark"
                    >stock adjustment</a
                  >
                </li>
                <li>
                  <a
                    href="#/stockvaluation"
                    class="nav-link text-dark">Scheduled Valuation</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-setup"
            >
              <span><i class="fa-sharp-duotone fa-solid fa-gear mr-2" style="font-size: 20px;"></i>SETUP</span>
              <span class="fw-bold">+</span>
            </a>
            <div class="collapse" id="menu-setup">
              <ul class="nav flex-column ms-3 ml-4">
                <li>
                  <a href="#/customer" class="nav-link text-dark">Customer</a>
                </li>
                <li>
                  <a href="#/Vendor" class="nav-link text-dark">Vendors</a>
                </li>
                <li>
                  <a href="#/Products" class="nav-link text-dark">Products</a>
                </li>
                <li>
                  <a href="#/User" class="nav-link text-dark">Users</a>
                </li>
                <li>
                  <a href="#/customerCate" class="nav-link text-dark">Customer Categories</a>
                </li>
                <li>
                  <a href="#/vendorcate" class="nav-link text-dark">Vendor Categories</a>
                </li>
                <li>
                  <a href="#/productcate" class="nav-link text-dark">Product Categories</a>
                </li>
                <li>
                  <a href="#/brand" class="nav-link text-dark">Brands</a>
                </li>
                <li>
                  <a href="#/tax" class="nav-link text-dark">Tax</a>
                </li>
                <li>
                  <a href="#/discount" class="nav-link text-dark">Discounts</a>
                </li>
                <li>
                  <a href="#/warehouse" class="nav-link text-dark">Warehouses</a>
                </li>
                <li>
                  <a href="#/mpl" class="nav-link text-dark">Multiple Price Levels</a>
                </li>
                <li>
                  <a href="#/employ" class="nav-link text-dark">Employees</a>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item mb-2 border-bottom">
            <a
              class="nav-link text-dark d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#menu-reports"
            >
              <span><i class="bi bi-file-earmark-person-fill mr-2"></i>REPORTS</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-light border-bottom p-0 m-0 custom-bg-c d-none d-lg-flex ">
    <div class="d-flex align-items-center">
      <img src="images/AFTAB_AUTO__1_-removebg-preview.png" alt="Logo" class="img-fluid ml-2" style="height: 70px;" />
      <a class="navbar-brand d-flex align-items-center" href="#">
        <strong class="text-success ml-1">AFTAB</strong>
        <span class="text-muted ml-1">AUTOS</span>
      </a>
    </div>
  
    <div class="ml-auto d-flex align-items-center">
      <!-- Support Dropdown -->
      <div class="dropdown">
        <a href="#" class="nav-link d-flex align-items-center text-muted" id="userDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa-sharp fa-solid fa-headset fa-lg mb-2" style="font-size: 28px;"></i>
          <span class="h6" style="font-weight: bolder;">SUPPORT</span>
        </a>
        <div class="dropdown-menu dropdown-menu-start" aria-labelledby="userDropdown1">
          <a class="dropdown-item" href="#">+92 346 0861150</a>
          <a class="dropdown-item" href="#">+92 335 1279228</a>
          <div class="dropdown-divider"></div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success">Contact Us</button>
          </div>
        </div>
      </div>
  
      <!-- Create Dropdown -->
      <div class="dropdown">
        <a href="#" class="nav-link d-flex align-items-center text-muted" id="userDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa-sharp fa-solid fa-square-plus mr-2 mb-2" style="font-size: 28px;"></i>
          <span class="h6" style="font-weight: bolder;">CREATE</span>
        </a>
        <div class="dropdown-menu dropdown-menu-start" aria-labelledby="userDropdown2">
          <a href="#/addQuotation" class="dropdown-item">Sale Quotation</a>
          <a href="#/addsaleinvoice" class="dropdown-item">Sale Invoice</a>
          <a href="#/addrecivemoney" class="dropdown-item">Receive Money</a>
          <a href="#/addpurchaseorder" class="dropdown-item">Purchase Order</a>
          <a class="dropdown-item" href="#/addpurchaseinvoice">Purchase Invoice</a>
          <a class="dropdown-item" href="#/addmakepaymet">Make Payment</a>
          <a class="dropdown-item" href="#/addexpance">Expense</a>
        </div>
      </div>
  
      <!-- Setup Dropdown -->
      <div class="dropdown">
        <a href="#" class="nav-link d-flex align-items-center text-muted" id="userDropdowns" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa-sharp-duotone fa-solid fa-gear mr-4 mb-2" style="font-size: 28px;"></i>
          <span class="h6" style="font-weight: bolder;">SETUP</span>
        </a>
        <div class="dropdown-menu dropdown-menu-start" aria-labelledby="userDropdowns">
          <div>
            <h6 class="dropdown-header">Lists</h6>
            <a href="#/customer" class="dropdown-item">Customer</a>
            <a href="#/Vendor" class="dropdown-item">Vendors</a>
            <a class="dropdown-item" href="#/Products">Products</a>
            <a class="dropdown-item" href="#/User">Users</a>
          </div>
          <div>
            <h6 class="dropdown-header">Categories</h6>
            <a class="dropdown-item" href="#/customerCate">Customer Categories</a>
            <a class="dropdown-item" href="#/vendorcate">Vendor Categories</a>
            <a class="dropdown-item" href="#/productcate">Product Categories</a>
            <a class="dropdown-item" href="#/brand">Brands</a>
          </div>
          <div>
            <h6 class="dropdown-header">General</h6>
            <a class="dropdown-item" href="#/tax">Tax</a>
            <a class="dropdown-item" href="#/discount">Discounts</a>
            <a class="dropdown-item" href="#/warehouse">Warehouses</a>
            <a class="dropdown-item" href="#/mpl">Multiple Price Levels</a>
          </div>
          <div>
            <h6 class="dropdown-header">Payroll</h6>
            <a class="dropdown-item" href="#/employ">Employees</a>
          </div>
        </div>
      </div>
  
      <!-- User Dropdown -->
      <div class="dropdown">
        <a href="#" class="nav-link dropdown-toggle d-flex align-items-center text-muted" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="h6">AFTAB AUT...</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#">User Profile</a>
            <a class="dropdown-item" href="#">Change Password</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
        </div>
    </div>
    </div>
  </nav>
  
</div>

<style>
  .custom-bg-c {
    background: #e7ebf1;
  }

  
</style>
