<template>
    <div>
        <Header/>
            <div class="start-content">
                <div class="main-content">
                    <div class="content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        <Sidebar/>
    </div>
</template>
<script>
import Sidebar from '@/components/dashboard/Sidebar.vue'
import Header from '@/components/dashboard/Header.vue'

export default {
        components: {
            Sidebar,
            Header
        }
    }
</script>
