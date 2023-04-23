async function getResource (url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Could not fetch from ${url}, status: ${response.status}`)
  }
  return await response.json()
}
function createFromServer (e, data) {
  e.target.remove()
  data.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    let icon
    if (item.sex === 'male') {
      icon = 'icons/mars.png'
    } else {
      icon = 'icons/female.png'
    }
    card.innerHTML = `
      <img src=${item.photo} alt='person photo'>
      <div class='name'>${item.name} ${item.surname}</div>
      <div class='sex'>
      <img src= ${icon} alt='mail'>
      </div>
      <div class='age'>${item.age}</div>
      `
    document.querySelector('.app').append(card)
  })
}
getResource('http://localhost:3000/people')
  .then(data => {
    document.querySelector('button').addEventListener('click', (e) => {
      createFromServer(e, data)
    })
  })
