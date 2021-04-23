import Swal from 'sweetalert2'

export default{
  namespaced:true,
    state: {
      users: [],
      loadingStatus: false
    },
    mutations: {
      SET_USERS(state, users) {
        state.users = users
      },

      SET_STATUS(state, newStatus){ 
        state.loadingStatus = newStatus
      },
      ADD_USER(state,newTodo) {
        state.users.unshift(newTodo)
      },
      UPDATE_USER(state,user) {
        state.users = state.users.findIndex(u => u.id === user.id)
      },
      DELETE_USER(state, id){
        state.users = state.users.filter(user => user.id !== id)
      },
    },
    actions: {
      getUsers({ commit }) {
        commit('SET_STATUS', true)
          this.$axios.get('')
            .then(response => {
              commit('SET_USERS', response.data)
              commit('SET_STATUS', false)
          })
      },
      insert({commit},credentials){
        return new Promise((resolve,reject) => {
            this.$axios.post('', {
              name: credentials.name,
              email: credentials.email,
              number: credentials.number,
              money: credentials.money,
              status: credentials.status, 
            })
            .then(response => {
              commit('ADD_USER',response.data)
              resolve(response)
              Swal.fire(
                'Sucesso!',
                'Novo usuário inserido!',
                'success',
              )
            })
            .catch(error => {
                reject(error)
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Algo aconteceu, contate o suporte',
                })
            })
            
        })
        
      },
      update({commit}, credentials){
        return new Promise((resolve,reject) => {
            this.$axios.put(`${credentials.id}`, credentials)
            .then(response => {
              commit('UPDATE_USER',response.data)
              resolve(response)
              Swal.fire(
                'Sucesso!',
                'Usuário atualizado!',
                'success'
              )
            })
            .catch(error => {
                reject(error)
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Algo aconteceu, contate o suporte',
                })
            })
        })
      },
      deleteUser({commit}, id){
        Swal.fire({
          title: 'Tem certeza?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, deletar!',
          cancelButtonText: 'Cancelar'
        })
        .then((result) => {
          if (result.isConfirmed) {
              Swal.fire(
              'Deletado!',
              'Usuario deletado com sucesso',
              'success'
            )
            return new Promise((resolve,reject) => {
              this.$axios.delete(`${id}`, {})
              .then(response => {
                commit('DELETE_USER', id);
                resolve(response)
                console.log(response)
              })
              .catch(error => {
                reject(error)
              })
            })
          }
        })
      },
    },
    getters:{   
     totalUser: state => { return state.users.length },
      userAtivo: state => { return state.users.filter(ativo => ativo.status) },
    },
  }
  
  