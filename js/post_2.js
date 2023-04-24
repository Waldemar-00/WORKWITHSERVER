window.addEventListener('DOMContentLoaded', () => {
  function request () {
    const form = document.querySelector('form')
    const formData = new FormData(form)
    const objFromData = {}
    formData.forEach((item, index) => {
      objFromData[index] = item
    })
    objFromData.id = Math.random() //! or formData.append('id', Math.random())
    const json = JSON.stringify(objFromData)
    const req = new XMLHttpRequest() //! stage - 0
    req.open('POST', 'http://localhost:3000/people') //! stage - 1
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(json) //! stage - 2
    //! LOADING - stage - 3
    req.addEventListener('load', () => { //! stage - 4, readystatechange and req.readyState === 4 - for all stages
      if (req.status >= 200 && req.status < 300) {
        const data = JSON.parse(req.response)
        console.log(data)
      } else if (req.status >= 300 && req.status < 400) {
        console.log(req.status, ' - Redirect')
      } else {
        console.error(req.status)
      }
    })
  }
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    request()
  }, { once: true })
})
