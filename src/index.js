import "./styles.css"

const content = document.querySelector('.content')
const name = document.createElement('div')
const introduction = document.createElement('div')
const hours = document.createElement('div')
const location = document.createElement('div')

const nameHeader = document.createElement('h1')
nameHeader.textContent = "Warung Kopi"
name.appendChild(nameHeader)
content.appendChild(name)