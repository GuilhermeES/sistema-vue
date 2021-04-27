<template>
    <div class="header">
        <div class="user-header">
            <div class="itens-user-header" @click="mouseOver"> 
                <strong> </strong>
                <img src="@/assets/user.png" width="50">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active: false
            }
        },
    }
</script>