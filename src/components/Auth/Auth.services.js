function setUser(login, password) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('SUCCESS!!!')
    //   }, 2000)
    // })
    return fetch('http://localhost:3030/users/new', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
    }).then((response) => {
      if (!response.ok) {
        // make the promise be rejected if we didn't get a 2xx response
        console.warn(response)
        const err = new Error('Not 2xx response')
        throw err
      }
  
      return console.log(response)
    })
  }
  

  function getUsers() {
    /* return new Promise((resolve, reject) => {
      setTimeout(() => reject(['Alexis', 'Sebastien', 'Thomas', 'Luc', 'Derya']), 2000)
    }) */
  
    return fetch('http://localhost:3030/users', { method: 'GET' })
    .then(function (response) {
        if (!response.ok) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
          // make the promise be rejected if we didn't get a 2xx response
          console.warn(response)
          const err = new Error('Not a right response')
          //err.response = response // console.warn(response)
          throw err
        } else {
          // go the desired response
        }
      })
      .catch(function (err) {
        // some error here 
      })
 
  }

  export { setUser, getUsers }