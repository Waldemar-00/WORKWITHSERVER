window.addEventListener('DOMContentLoaded', () => {
  function request () {
    const req = new XMLHttpRequest() //! stage - 0
    req.open('GET', 'http://localhost:3000/people') //! stage - 1
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send() //! stage - 2
    //! LOADING - stage - 3
    req.addEventListener('load', () => { //! stage - 4, readystatechange and req.readyState === 4 - for all stages
      if (req.status === 200) {
        console.log(JSON.parse(req.response))
      } else {
        console.error(req.status)
      }
    })
  }
  request()
})
