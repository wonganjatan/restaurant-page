import "./styles.css"

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

const content = document.querySelector('.content')

const homeContent = () => {
    content.textContent = ""

    content.appendChild(createNameSection())
    content.appendChild(createIntroductionSection())
    content.appendChild(createHoursSection())
    content.appendChild(createLocationSection())

    function createNameSection() {
        const nameDiv = document.createElement('div')
        const nameHeader = document.createElement('h1')
        nameHeader.textContent = "Warung Kopi"
        nameDiv.appendChild(nameHeader)

        return nameDiv
    }

    function createIntroductionSection() {
        const introductionDiv = document.createElement('div')

        const introParagraph = document.createElement('p')
        introParagraph.textContent = "Warung Kopi is the best coffee shop in the world"
        introductionDiv.appendChild(introParagraph)

        return introductionDiv
    }

    function createHoursSection() {
        const hoursDiv = document.createElement('div')

        const hoursUnorderedList = document.createElement('ul')
        hoursUnorderedList.style.textDecoration = 'none'

        const hoursHeader = document.createElement('h1')
        hoursHeader.textContent = "Hours"
        hoursDiv.appendChild(hoursHeader)

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

        hoursDiv.appendChild(hoursUnorderedList)

        return hoursDiv
    }

    function createLocationSection() {
        const locationDiv = document.createElement('div')

        const locationHeader = document.createElement('h1')
        locationHeader.textContent = "Location"
        locationDiv.appendChild(locationHeader)
        
        const locationParagraph = document.createElement('p')
        locationParagraph.textContent = "123 Privacy Please, Indonesia"
        locationDiv.appendChild(locationParagraph)

        return locationDiv
    }
}

const menuContent = () => {
    content.textContent = ""

    content.appendChild(createNameSection())
    content.appendChild(createBeverageSection())
    content.appendChild(createMainDishSection())
    content.appendChild(createDessertSection())

    function createNameSection() {
        const nameDiv = document.createElement('div')
        const nameHeader = document.createElement('h1')
        nameHeader.textContent = "Menu"
        nameDiv.appendChild(nameHeader)

        return nameDiv
    }

    function createBeverageSection() {
        const beverageDiv = document.createElement('div')
        const beverageHeader = document.createElement('h1')
        beverageHeader.textContent = "Beverage"

        const beverageKopi = document.createElement('h2')
        beverageKopi.textContent = "Kopi ($3)"

        const beverageTea = document.createElement('h2')
        beverageTea.textContent = "Tea ($1)"

        beverageDiv.appendChild(beverageHeader)
        beverageDiv.appendChild(beverageKopi)
        beverageDiv.appendChild(beverageTea)

        return beverageDiv
    }

    function createMainDishSection() {
        const mainDishDiv = document.createElement('div')
        const mainDishHeader = document.createElement('h1')
        mainDishHeader.textContent = "Main Dish"

        const mainDishNasiGoreng = document.createElement('h2')
        mainDishNasiGoreng.textContent = "Nasi Goreng ($5)"

        const mainDishSateAyam = document.createElement('h2')
        mainDishSateAyam.textContent = "Sate Ayam ($5)"

        mainDishDiv.appendChild(mainDishHeader)
        mainDishDiv.appendChild(mainDishNasiGoreng)
        mainDishDiv.appendChild(mainDishSateAyam)

        return mainDishDiv
    }   

    function createDessertSection() {
        const dessertDiv = document.createElement('div')
        const dessertHeader = document.createElement('h1')
        dessertHeader.textContent = "Dessert"

        const dessertIceCream = document.createElement('h2')
        dessertIceCream.textContent = "Ice Cream ($3)"

        const dessertCiki = document.createElement('h2')
        dessertCiki.textContent = "Ciki ($1)"

        dessertDiv.appendChild(dessertHeader)
        dessertDiv.appendChild(dessertIceCream)
        dessertDiv.appendChild(dessertCiki)

        return dessertDiv
    }
}

const contactContent = () => {
    content.textContent = ""

    content.appendChild(createNameSection())
    content.appendChild(createBeverageSection())
    content.appendChild(createMainDishSection())
    content.appendChild(createDessertSection())

    function createNameSection() {
        const nameDiv = document.createElement('div')
        const nameHeader = document.createElement('h1')
        nameHeader.textContent = "Contact Us"
        nameDiv.appendChild(nameHeader)

        return nameDiv
    }

    function createBeverageSection() {
        const beverageDiv = document.createElement('div')
        const beverageHeader = document.createElement('h1')
        beverageHeader.textContent = "Beverage"

        const beverageKopi = document.createElement('h2')
        beverageKopi.textContent = "Kopi ($3)"

        const beverageTea = document.createElement('h2')
        beverageTea.textContent = "Tea ($1)"

        beverageDiv.appendChild(beverageHeader)
        beverageDiv.appendChild(beverageKopi)
        beverageDiv.appendChild(beverageTea)

        return beverageDiv
    }

    function createMainDishSection() {
        const mainDishDiv = document.createElement('div')
        const mainDishHeader = document.createElement('h1')
        mainDishHeader.textContent = "Main Dish"

        const mainDishNasiGoreng = document.createElement('h2')
        mainDishNasiGoreng.textContent = "Nasi Goreng ($5)"

        const mainDishSateAyam = document.createElement('h2')
        mainDishSateAyam.textContent = "Sate Ayam ($5)"

        mainDishDiv.appendChild(mainDishHeader)
        mainDishDiv.appendChild(mainDishNasiGoreng)
        mainDishDiv.appendChild(mainDishSateAyam)

        return mainDishDiv
    }   

    function createDessertSection() {
        const dessertDiv = document.createElement('div')
        const dessertHeader = document.createElement('h1')
        dessertHeader.textContent = "Dessert"

        const dessertIceCream = document.createElement('h2')
        dessertIceCream.textContent = "Ice Cream ($3)"

        const dessertCiki = document.createElement('h2')
        dessertCiki.textContent = "Ciki ($1)"

        dessertDiv.appendChild(dessertHeader)
        dessertDiv.appendChild(dessertIceCream)
        dessertDiv.appendChild(dessertCiki)

        return dessertDiv
    }
}


home.addEventListener('click', () => {
    homeContent()
})

menu.addEventListener('click', () => {
    menuContent()
})

contact.addEventListener('click', () => {
    contactContent()
})

homeContent()