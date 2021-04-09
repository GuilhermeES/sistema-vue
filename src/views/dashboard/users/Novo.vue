<template>
    <div>
        <div class="container">
            <div class="text-geral">
                <div class="border">
                    <h1>Novo usuário</h1>
                </div>
            </div>
            <div class="new-user-content">
                <div>
                    <form class="novo-usuario">
                        <input type="text" placeholder="Nome *" class="mb-2" v-model="name" required>
                        <input type="email" placeholder="Email *" class="mb-2" v-model="email" required>
                        <input type="text" placeholder="Telefone *" class="mb-2" v-model="number" required>
                        <input type="text" placeholder="Dinheiro" class="mb-2" v-model="money" required>
                        <h4>Ativo ?</h4>
                        <label class="switch mb-2">
                            <input type="checkbox" v-model="status">
                            <span class="slider round"></span>
                        </label><br>
                        <button @click="insertForm($event)" class="btn-primary">Salvar</button>
                    </form>
                </div>
                <div>
                    <img src="@/assets/newuser.svg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default{
    data() {
        return {
            name:"",
            email:"",
            number:"",
            money:"",
            status:false,
        };
    },
    methods:{
        insertForm(e) {
            e.preventDefault();
            this.$store.dispatch('users/insert',{
                    name: this.name,
                    email: this.email,
                    number: this.number,
                    money: this.money,
                    status: this.status
                });
                this.$router.push({ name: "usuarios" });
        },
    },
}
</script>