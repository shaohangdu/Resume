<template>
    <div class="col-md-2">
         <div>
            <h6 class="text-muted px-3 mt-4 mb-1 font-weight-bold">管理員</h6>
            <ul class="nav flex-column mb-2">
                <router-link class="nav-link text-danger" to="/admin/products">
                <i class="fas fa-box-open"></i>
                產品列表
                </router-link>
                <router-link class="nav-link text-danger" to="/admin/coupon">
                <i class="fab fa-buffer"></i>
                優惠卷
                </router-link>
                <router-link class="nav-link text-danger" to="/admin/order">
                <i class="fas fa-box-open"></i>
                訂單列表
                </router-link>
            </ul>
         </div>
    </div>
</template>