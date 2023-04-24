async function getResource (url) {
  const form = document.querySelector('form')
  const formData = new FormData(form)
  const response = await fetch(url, {
    method: 'POST',
    body: formData
  })
  if (!response.ok) {
    throw new Error(`Could not fetch from ${url}, status: ${response.status}`)
  }
  return await response
}
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  getResource('https://fakestoreapi.com/products').then(data => console.log(data)).catch(err => console.log(err, 'ERROR'))
}, { once: true })
