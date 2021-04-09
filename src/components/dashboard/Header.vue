<template>
    <div class="header">
        <div class="user-header">
            <div class="itens-user-header" @click="mouseOver"> 
                <strong> </strong>
                <img src="@/assets/user.png" width="50">
            </div>
        </div>
         <div class="dropdown-user"  v-show="active">
            <div class="dropdown-user-itens">
                    <router-link to="">Logout</router-link><br>
                    <router-link to="">Minha conta</router-link>
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
        methods:{
             mouseOver: function(){
                this.active = !this.active;   
            }
        }
    }
</script>