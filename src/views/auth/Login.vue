<template>
    <div>
        <div class="auth">
            <div class="container">
                
                    <div class="form-box">
                        <form>
                            <div class="mb-2">
                                <input type="text" placeholder="Seu email" v-model="email">
                            </div>
                            <div class="mb-2">
                                <input type="password" placeholder="Sua senha" v-model="password">
                            </div>
                            <button @click="logar($event)" type="submit" class="btn-primary">Logar</button>
                        </form>
                    </div>
               
            </div>
            <div>
                <div class="background">
                    <img src="@/assets/login.svg" class="img-fluid">
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '@/components/auth/authFooter.vue'
export default {
    components: {
        Footer
    },
    data (){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        logar($e){
            $e.preventDefault()
            this.$store.dispatch('auth/login',{
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>


