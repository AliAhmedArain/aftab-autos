<script>

    import Quotation from "./Quotation.svelte";

</script>

    <div class="d-none d-lg-flex">
        <!-- Sidebar -->
        <div class="custom-bg-c vh-100" style="width: 250px">
                <!-- Logo and Title -->
                <h4 class="d-flex mt-4 ml-3">
                    <span class="me-2"></span> HOME
                </h4>

                <!-- Menu List -->
                <ul class="nav flex-column mt-4">
                    <!-- Dashboards -->
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-dashboards">
                            <span><i class="bi bi-calendar4-range mr-2"></i>Dashboard</span>
                        </a>
                    </li>

                    <!-- Customers -->
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-sales">
                            <span><i class="bi bi-clipboard-data-fill mr-2"></i>SALES</span>
                            <span class="fw-bold">+</span>
                        </a>
                        <div class="collapse" id="menu-sales">
                            <ul class="nav flex-column ms-3 ml-4">
                                <li><a href="#/quotation" class="nav-link text-dark">Quotation</a></li>
                                <li><a href="#/invoice" class="nav-link text-dark">invoice</a></li>
                                <li><a href="#/salereturn" class="nav-link text-dark">return</a></li>
                                <li><a href="#/recivemoney" class="nav-link text-dark">receive money</a></li>
                                <li><a href="#/refund" class="nav-link text-dark">refund</a></li>
                            </ul>
                        </div>
                    </li>

                    <!-- Projects -->
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-PURCHASE">
                            <span><i class="bi bi-bag-check-fill mr-2"></i>PURCHASE</span>
                            <span class="fw-bold">+</span>
                        </a>
                        <div class="collapse" id="menu-PURCHASE">
                            <ul class="nav flex-column ms-3 ml-4">
                                <li><a href="#/purchaseorder" class="nav-link text-dark">order</a></li>
                                <li><a href="#/purchaseinvoice" class="nav-link text-dark">invoice</a></li>
                                <li><a href="#/purchasereturn" class="nav-link text-dark">return</a></li>
                                <li><a href="#/purchasemakepayment" class="nav-link text-dark">make payment</a></li>
                                <li><a href="#/purchaserefund" class="nav-link text-dark">refund</a></li>
                            </ul>
                        </div>
                    </li>

                    <!-- Account -->
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-pos">
                            <span><i class="bi bi-pc-display-horizontal mr-2"></i>POS</span>
                            <span class="fw-bold">+</span>
                        </a>
                        <div class="collapse" id="menu-pos">
                            <ul class="nav flex-column ms-3 ml-4">
                                <li><a href="#/checkoutcounter" class="nav-link text-dark">Checkout counter</a>
                                </li>
                                <li><a href="#/poss" class="nav-link text-dark">pos</a></li>
                            </ul>
                        </div>
                    </li>

                    <!-- Add similar sections for Orders, Posts, Authentication -->
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-account">
                            <span><i class="bi bi-menu-button mr-2"></i>ACCOUNTS</span>
                            <span class="fw-bold">+</span>
                        </a>
                        <div class="collapse" id="menu-account">
                            <ul class="nav flex-column ms-3 ml-4">
                                <li><a href="#/expanseaccount" class="nav-link text-dark">Expense</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-inventory">
                            <span><i class="bi bi-bank mr-2"></i>INVENTORY</span>
                            <span class="fw-bold">+</span>
                        </a>
                        <div class="collapse" id="menu-inventory">
                            <ul class="nav flex-column ms-3 ml-4">
                                <li><a href="#/stock-movement" class="nav-link text-dark">Stock Movement</a></li>
                                <li><a href="#/stockadjustment" class="nav-link text-dark">stock adjustment</a>
                                </li>
                                <li><a href="#/stockvaluation" class="nav-link text-dark">Scheduled Valuation</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item mb-2 border-bottom">
                        <a class="nav-link text-dark d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" href="#menu-reports">
                            <span><i class="bi bi-file-earmark-person-fill mr-2"></i>REPORTS</span>
                        </a>
                    </li>
                </ul>
        </div>
        <!-- <Quotation></Quotation> -->


        
    </div>

<style>
    .custom-bg-c {
        background: #e7ebf1;
    }
</style>