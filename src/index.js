import "./styles.css"

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

const content = document.querySelector('.content')

const homeContent = () => {
    content.appendChild(createNameSection())
    content.appendChild(createIntroductionSection())
    content.appendChild(createHoursSection())
    content.appendChild(createLocationSection())
    function createNameSection() {
        const name = document.createElement('div')
        const nameHeader = document.createElement('h1')
        nameHeader.textContent = "Warung Kopi"
        name.appendChild(nameHeader)

        return name
    }

    function createIntroductionSection() {
        const introduction = document.createElement('div')

        const introParagraph = document.createElement('p')
        introParagraph.textContent = "Warung Kopi is the best coffee shop in the world"
        introduction.appendChild(introParagraph)

        return introduction
    }

    function createHoursSection() {
        const hours = document.createElement('div')

        const hoursUnorderedList = document.createElement('ul')
        hoursUnorderedList.style.textDecoration = 'none'

        const hoursHeader = document.createElement('h1')
        hoursHeader.textContent = "Hours"
        hours.appendChild(hoursHeader)

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for (let i = 0; i < 7; i++) {
            const list = document.createElement('li')
            const day = days[i]

            if (i < 3) {
                list.textContent = `${day}: 6am - 6pm`
            } else if (i < 5) {
                list.textContent = `${day}: 6am - 10pm`
            } else if (i === 5) {
                list.textContent = `${day}: 8am - 6pm`
            } else {
                list.textContent = `${day}: 8am - 8pm`
            }

            hoursUnorderedList.appendChild(list)
        }

        hours.appendChild(hoursUnorderedList)

        return hours
    }

    function createLocationSection() {
        const location = document.createElement('div')

        const locationHeader = document.createElement('h1')
        locationHeader.textContent = "Location"
        location.appendChild(locationHeader)
        
        const locationParagraph = document.createElement('p')
        locationParagraph.textContent = "123 Privacy Please, Indonesia"
        location.appendChild(locationParagraph)

        return location
    }
}


home.addEventListener('click', () => {
    alert("You clicked Home")
    content.textContent = ""
    homeContent()
})

menu.addEventListener('click', () => {
    alert("You clicked Menu")
    content.textContent = ""
})

contact.addEventListener('click', () => {
    alert("You clicked Contact")
    content.textContent = ""
})

homeContent()