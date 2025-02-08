<script>
    import { onMount } from 'svelte';
    let collapsed = false;
    let activeDropdown = null;

    function toggleSidebar() {
        collapsed = !collapsed;
    }

    function toggleDropdown(index) {
        activeDropdown = activeDropdown === index ? null : index;
    }
</script>

<!-- Sidebar -->
<div id="sidebar" class:collapsed>
    <!-- Sidebar Header -->
    <div class="sidebar-header">
        <div class="sidebar-brand">
            <span class="sidebar-brand-text">MENU</span>
        </div>
        <button id="sidebarToggle" on:click={toggleSidebar}>
            <i class="fas fa-bars"></i>
        </button>
    </div>

    <!-- Sidebar Links -->
    <div class="sidebar-links">
        <!-- Sales Dropdown -->
        <div class="dropdown">
            <button class="dropbtn" on:click={() => toggleDropdown(0)}>
                <i class="fas fa-chart-line"></i>
                <span class="sidebar-link-text">Sales</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            {#if activeDropdown === 0}
                <div class="dropdown-content">
                    <a href="#/quotation">Quotation</a>
                    <a href="#">Orders</a>
                    <a href="#">Invoices</a>
                </div>
            {/if}
        </div>

        <!-- Purchase Dropdown -->
        <div class="dropdown">
            <button class="dropbtn" on:click={() => toggleDropdown(1)}>
                <i class="fas fa-shopping-cart"></i>
                <span class="sidebar-link-text">Purchase</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            {#if activeDropdown === 1}
                <div class="dropdown-content">
                    <a href="#">Purchase Orders</a>
                    <a href="#">Vendors</a>
                    <a href="#">Receipts</a>
                </div>
            {/if}
        </div>

        <!-- POS Dropdown -->
        <div class="dropdown">
            <button class="dropbtn" on:click={() => toggleDropdown(2)}>
                <i class="fas fa-cash-register"></i>
                <span class="sidebar-link-text">POS</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            {#if activeDropdown === 2}
                <div class="dropdown-content">
                    <a href="#">POS Sales</a>
                    <a href="#">Transactions</a>
                    <a href="#">Returns</a>
                </div>
            {/if}
        </div>

        <!-- Accounts Dropdown -->
        <div class="dropdown">
            <button class="dropbtn" on:click={() => toggleDropdown(3)}>
                <i class="fas fa-book"></i>
                <span class="sidebar-link-text">Accounts</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            {#if activeDropdown === 3}
                <div class="dropdown-content">
                    <a href="#">General Ledger</a>
                    <a href="#">Expenses</a>
                    <a href="#">Payments</a>
                </div>
            {/if}
        </div>

        <!-- Inventory Dropdown -->
        <div class="dropdown">
            <button class="dropbtn" on:click={() => toggleDropdown(4)}>
                <i class="fas fa-boxes"></i>
                <span class="sidebar-link-text">Inventory</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            {#if activeDropdown === 4}
                <div class="dropdown-content">
                    <a href="#">Stock Management</a>
                    <a href="#">Suppliers</a>
                    <a href="#">Reports</a>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    /* Sidebar Styling */
    #sidebar {
        width: 250px;
        height: 100vh;
        background: #1a1a1a;
        color: #fff;
        /* position: fixed; */
        top: 65px;
        left: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    #sidebar.collapsed {
        width: 80px;
    }
    #sidebar.collapsed .sidebar-link-text {
        display: none;
    }
    #sidebar.collapsed .sidebar-brand-text {
        display: none;
    }
    #sidebar.collapsed .sidebar-header {
        justify-content: center;
    }

    /* Sidebar Header */
    .sidebar-header {
        padding: 20px;
        background: #111;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebar-brand {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
    }
    .sidebar-brand i {
        margin-right: 10px;
    }

    /* Sidebar Links */
    .sidebar-links {
        padding: 20px 0;
    }
    .sidebar-link {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .sidebar-link:hover {
        background: #333;
    }
    .sidebar-link i {
        margin-right: 10px;
        font-size: 1.2rem;
    }
    .sidebar-link-text {
        font-size: 1rem;
    }

    /* Dropdown Styling */
    .dropdown {
        margin-bottom: 10px;
    }
    .dropbtn {
        background: none;
        border: none;
        color: #fff;
        width: 100%;
        text-align: left;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .dropbtn:hover {
        background: #333;
    }
    .dropbtn i {
        margin: 0 5px; /* Reduced gap */
    }
    .dropbtn .sidebar-link-text {
        flex-grow: 1; /* Ensures text takes up remaining space */
        margin: 0 10px; /* Adjust spacing */
    }
    .dropdown-content {
        background: #2a2a2a;
        margin-left: 20px;
        border-radius: 5px;
        overflow: hidden;
    }
    .dropdown-content a {
        display: block;
        padding: 10px 20px;
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .dropdown-content a:hover {
        background: #3a3a3a;
    }

    /* Toggle Button */
    #sidebarToggle {
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
    }

    /* Responsive Styles */
    @media (max-width: 991px) {
        #sidebar {
            /* left: -250px; */

            display: none;
        }
        #sidebar.collapsed {
            left: 0;
            width: 80px;
        }
    }
</style>