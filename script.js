import database from './database.json' assert {type: 'json'};

const dataCardTemplate = document.querySelector("[data-template]")
const dataPassCardTemplate = document.querySelector("[data-pass-card]")
const searchInput = document.querySelector("[data-search]")

let data = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    data.forEach(each => {
        const isVisible = each.title.toLowerCase().includes(value) ||
            each.url.toLowerCase().includes(value) ||
            each.username.toLowerCase().includes(value)
        each.element.classList.toggle("hide", !isVisible)
    })
})

data = database.map(each => {
    const card = dataCardTemplate.content.cloneNode(true).children[0]
    const title = card.querySelector("[data-title]")
    const url = card.querySelector("[data-url]")
    const username = card.querySelector("[data-username]")
    const password = card.querySelector("[data-password]")
    title.textContent = each.title
    url.textContent = each.url
    username.textContent = each.username
    password.textContent = each.password
    dataPassCardTemplate.append(card)
    return { title: each.title, url: each.url, username: each.username, password: each.password, element: card }
})