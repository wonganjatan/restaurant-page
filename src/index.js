import "./styles.css"

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

const content = document.querySelector('.content')
const name = document.createElement('div')
const introduction = document.createElement('div')
const hours = document.createElement('div')
const location = document.createElement('div')

const nameHeader = document.createElement('h1')
nameHeader.textContent = "Warung Kopi"
name.appendChild(nameHeader)
content.appendChild(name)

const introParagraph = document.createElement('p')
introParagraph.textContent = "Warung Kopi is the best coffee shop in the world"
introduction.appendChild(introParagraph)
content.appendChild(introduction)