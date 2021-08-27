const mainDiv = document.querySelector(".main-container")
const img = 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg'

class ProductCard {
    constructor(title, description, ctaLabel, imgSrc) {
        this.title = title;
        this.description = description;
        this.ctaLabel = ctaLabel;
        this.imgSrc = imgSrc;
    }

    createProductCard = () => {

        // Create new elements for each part of the product card 
        const cardWrapper = document.createElement('div');
        const cardTitle = document.createElement('h2');
        const cardDesc = document.createElement('p');
        const button = document.createElement('button')
        const cardImg = document.createElement('img')

        // Add generic class names to those elements for styling 
        cardWrapper.classList.add('cardWrapper')
        cardTitle.classList.add('cardTitle')
        cardDesc.classList.add('card-description')
        button.classList.add('card-btn')
        cardImg.classList.add('cardImg')

        // Set the inner content of the elements to the data received in the class 
        cardTitle.innerText = this.title
        cardDesc.innerText = this.description
        button.innerText = this.ctaLabel 
        cardImg.src = this.imgSrc

        // Append each element inside of your card wrapper (in order from top to bottom)
        cardWrapper.appendChild(cardTitle)
        cardWrapper.appendChild(cardDesc)
        cardWrapper.appendChild(cardImg)
        cardWrapper.appendChild(button)
        
        // Append the card component into the main container within your DOM 
        mainDiv.appendChild(cardWrapper)

    }
}

// INITIAL StereoPannerNode, DOING THINGS THE LONG WAY:

// Instantiate a product card with data passed in 
const card1 = new ProductCard('title', 'description', 'ctaLabel', img)
const card2 = new ProductCard('title', 'description', 'ctaLabel', img)
const card3 = new ProductCard('title', 'description', 'ctaLabel', img)
const card4 = new ProductCard('title', 'description', 'ctaLabel', img)
const card5 = new ProductCard('title', 'description', 'ctaLabel', img)

// Call the class method to invoke its functionality - this will be the first step before refactoring 

// card1.createProductCard()
// card2.createProductCard()
// card3.createProductCard()
// card4.createProductCard()
// card5.createProductCard()

// NOTE: THE ABOVE WAY IS LONGER BECAUSE AN INSTANCE IS CREATED ONE AT A TIME 
// ALSO, FOR EACH INSTANCE WE THEN NEED TO CALL THE CLASS METHOD ONE BY ONE

// console log for testing purposes
console.log(card1)

// OUR DATA OBJECT - to be used for rendering our product card
// Note: This data can come from any source - i.e. some API or data base

const dataObj = [
    {
        title: "title1",
        desc: "description 1",
        ctaLabel: "This is cta label 1",
        img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
    },
    {
        title: "title2",
        desc: "description 2",
        ctaLabel: "This is cta label 2",
        img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
    },
    {
        title: "title3",
        desc: "description 3",
        ctaLabel: "This is cta label 3",
        img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
    },
    {
        title: "title4",
        desc: "description 4",
        ctaLabel: "This is cta label 4",
        img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
    }
]

// OUR REFACTOR OF THE PREVIOUS STEP:

// THIS IS QUICKER BECAUSE WE TAKE CARE OF CREATING A NEW CLASS INSTANCE AND CALLING THE CLASS METHOD IN ONCE SIMPLE FUNCTION WITH FEWER LINES OF CODE, AND LESS REPETITION 

// This is a function that can be used to dynamically render DOM elements (in this case: product card)
const displayCards = (data) => {

    data.map((item, index) => {
        // destructure our needed values from the data object 
        const { title, desc, ctaLabel, img } = item;

        // use a variable to instantiate a new instance of our component 
        const newCard = new ProductCard(title, desc, ctaLabel, img);
        // call the class method on the new instance 
        newCard.createProductCard()
    }) 
}

// Call our function 
displayCards(dataObj)
