async function getResource (url) {
  const form = document.querySelector('form')
  const formData = new FormData(form)
  formData.append('id', Math.random()) //! or objFromData.id = Math.random()
  const objFromData = {}
  formData.forEach((item, index) => {
    objFromData[index] = item
  })
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(objFromData)
  })
  if (!response.ok) {
    throw new Error(`Could not fetch from ${url}, status: ${response.status}`)
  }
  return await response.json()
}
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  getResource('http://localhost:3000/people').then(data => console.log(data)).catch(err => console.log(err, 'ERROR'))
}, { once: true })
