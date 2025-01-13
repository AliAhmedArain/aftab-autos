<script>
import posImage from '../assets/images/pos.png';
  </script>



<div class="container-fluid p-0 vh-100 " style="width: 1550px;">
    <div>
        <div class="p- border-bottom">
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 pt-3">
                <h2>Checkout Counters</h2>
                <a href="#/addcheckoutcounter" class="btn btn-success">+ Add Checkout Counters</a>
            </div>
            <div class="d-flex justify-content-between mb-4 align-items-center">
                <img src={posImage} height="210px" alt="POS Image">
                <div>
                    <button class="btn btn-success">Print</button>
                    <button class="btn btn-success">Export to Excel</button>
                </div>
            </div>
        </div>
        <table class="table table-striped table-hover mt-3 ">
            <thead class="table-light">
            <tr>
                <!--            <th><input type="checkbox" checked></th>-->
                <th>Name</th>
                <th>	Cash Account Name</th>
                <th>	Warehouse Name </th>
                <th>Status </th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>M</td>
                <td></td>
                <td>H</td>
                <td></td>
                <td>
                    <button class="btn btn-outline-primary btn-sm">
                        <i class="bi bi-file-earmark-ruled"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Munawar</td>
                <td>Banda</td>
                <td>033292339</td>
                <td></td>
                <td>                    <button class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-file-earmark-ruled"></i>
                </button>
                    <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <!--    <nav aria-label="Page navigation ">-->
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</div>