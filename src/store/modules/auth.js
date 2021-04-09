export default{
  namespaced:true,
    state: {
      users: [],
      loadingStatus: false
    },
    mutations: {


    },
    actions: {
        login(context,credentials){
            return new Promise((resolve,reject) => {
                const a = {email: credentials.email,
                password: credentials.password}
               this.$axios.get('',a,{
                   
                })
                .then(response => {
                    console.log(response.data)
                    if(a == response.data){
                        resolve(response)
                    }
                    else{
                        alert('a')
                    }
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
   
    },
    getters:{   

    },
  }
  
  