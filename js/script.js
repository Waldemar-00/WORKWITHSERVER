window.addEventListener('DOMContentLoaded', () => {
  function request () {
    const req = new XMLHttpRequest() //! stage - 0
    req.open('GET', 'http://localhost:3000/people') //! stage - 1
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send() //! stage - 2
    //! LOADING - stage - 3
    req.addEventListener('load', () => { //! stage - 4, readystatechange and req.readyState === 4 - for all stages
      if (req.status === 200) {
        const data = JSON.parse(req.response)
        console.log(data)
        document.querySelector('button').addEventListener('click', (e) => {
          e.target.remove()
          data.forEach(item => {
            const card = document.createElement('div')
            card.classList.add('card')
            let icon;
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
        }, {once: true})
      } else {
        console.error(req.status)
      }
    })
  }
  request()
})