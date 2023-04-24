window.addEventListener('DOMContentLoaded', () => {
  function request () {
    const form = document.querySelector('form')
    const formData = new FormData(form)
    const req = new XMLHttpRequest()
    req.open('POST', 'https://fakestoreapi.com/products')
    req.send(formData)
    req.addEventListener('load', () => {
      if (req.status >= 200 && req.status < 300) {
        console.log(req)
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
