<template>
    <div class="container">
        <div v-if="loadingStatus" class="loading">
            <div>
                <PulseLoader/>
            </div>
        </div>
        <div class="text-geral">
            <div class="border">
                <h1>Informações</h1>
            </div>
        </div>
        <div class="content">     
            <div class="cards-geral">
                <div class="card">
                    <div>
                        <p class="text-muted">
                            Total de usuários
                        </p>
                        <h1>{{totalUser}}</h1>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <p class="text-muted">
                            Usários ativos
                        </p>
                        <h1>{{userAtivo.length}}</h1>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <p class="text-muted">
                            Total
                        </p>
                        <h1>{{ }}</h1>
                    </div>
                </div>
            </div>
            <hr>
            <div class="pre-content">
                 <div>
                    <i class="fas fa-search"></i>
                    <input type="text" v-model="search"  placeholder="Pesquise por nome...">
                    <button class="btn-primary" @click="pesquisa()">Pesquisar</button>
                 </div>
                 <div>
                    <router-link to="usuarios/novo">
                        <button class="btn-primary">Novo</button>
                    </router-link>
                 </div>
            </div>
            <div class="list-users">
                <div class="user" v-for="user in pageOfItems" :key="user.id">
                    <div class="user">
                        <img src="@/assets/userlist.jpg" width="70">
                    </div>
                    <div class="name">{{user.name}}</div>
                    <div class="email">{{user.email}}</div>
                    <div class="number">{{user.number}}</div>
                    <div class="value">{{ user.money}}</div>
                    <div class="status" v-if="user.status">
                        <div class="one">
                            Ativo
                        </div>
                    </div>
                    <div class="status" v-if="!user.status">
                        <div class="zero">
                            Inativo
                        </div>
                    </div>
                    <div>
                        <div v-on:click="deleteUser(user.id)" class="excluir"><i class="fas fa-trash-alt"></i></div>
                        <router-link :to="`/usuario/${user.id}`">
                            <i class="fas fa-user-edit"></i>
                        </router-link>
                    </div>
                </div>
            </div>   
            <jw-pagination :items="users" @changePage="onChangePage" :labels="customLabels" :pageSize="7"></jw-pagination>
        </div>
    </div>
</template>
<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const customLabels = {
    first: 'Primeira',
    last: 'Última',
    previous: 'Anterior',
    next: 'Próxima'
};

export default{
    data() {
        return {
            pageOfItems: [],
            search: '',
            customLabels
        };
    },
    components: {
        PulseLoader,

    },
    computed: {
       ...mapState('users',[
           'users',
           'loadingStatus',
       ]),
       ...mapGetters('users',[
            'totalUser',
            'userAtivo',
        ]), 
    },
        
    created() {
        this.$store.dispatch("users/getUsers");
    },
    
    methods: {
        ...mapActions('users', [
            'deleteUser',
            'searchName'
        ]),
        pesquisa() {
            this.searchName(this.search);
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },

}
</script>