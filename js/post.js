window.addEventListener('DOMContentLoaded', () => {
  function request() {
    const body = {
      name: 'Alex',
      surname: 'Brown',
      age: 36,
      id: Math.random() //! it is only for jason-server
    }
    const jsonFromObj = JSON.stringify(body)
    const req = new XMLHttpRequest() //! stage - 0
    req.open('POST', 'http://localhost:3000/people') //! stage - 1
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(jsonFromObj) //! stage - 2
    //! LOADING - stage - 3
    req.addEventListener('load', () => { //! stage - 4, readystatechange and req.readyState === 4 - for all stages
      if (req.status >= 200) {
        const data = JSON.parse(req.response)
        console.log(data)
      } else {
        console.error(req.status)
      }
    })
  }
  request()
})
