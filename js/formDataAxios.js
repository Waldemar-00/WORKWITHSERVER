async function getResource () {
  const form = document.querySelector('form')
  const formData = new FormData(form)
  const response = await axios({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    data: formData
    //! headers: { 'content-type': 'multipart/form-data' } with and without
  })
  if (response.status >= 300 && response.status < 200) {
    throw new Error(`Could not fetch from 'https://fakestoreapi.com/products', status: ${response.status}`)
  }
  return await response
}
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  getResource().then(data => console.log(data)).catch(err => console.log(err, 'ERROR'))
}, { once: true })
