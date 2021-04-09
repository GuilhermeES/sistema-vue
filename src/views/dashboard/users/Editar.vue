<template>
    <div>
        <div class="container">
            <div class="text-geral">
                <div class="border">
                    <h1>Editando <b>{{actu.name}}</b></h1>
                </div>
            </div>
            <div class="new-user-content">
                <div>
                    <form class="novo-usuario">
                        <input type="text" v-model="actu.name" class="mb-2"  required>
                        <input type="email" placeholder="Email *" class="mb-2" v-model="actu.email" required>
                        <input type="text" placeholder="Telefone *" class="mb-2" v-model="actu.number" required>
                        <input type="text" placeholder="Dinheiro" class="mb-2" v-model="actu.money" required>
                        <h4>Ativo ?</h4>
                        <label class="switch mb-2">
                            <input type="checkbox" v-model="actu.status">
                            <span class="slider round"></span>
                        </label><br>
                        <button @click="update($event)" class="btn-primary">Salvar</button>
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
          actu: [],
        };
    },
 
    created() {
        this.getUser(this.$route.params.id)
   },

    methods:{
        getUser(id) {
          this.$axios.get(`${id}`, {})
            .then(response => {
              this.actu = response.data
          })
       },
        update(e){
            e.preventDefault();
            let data = {
              id: this.actu.id,
              name: this.actu.name,
              email: this.actu.email,
              number: this.actu.number,
              money: this.actu.money,
              status: this.actu.status, 
            }
            this.$store.dispatch('users/update', data);
        }
    },
}
</script>