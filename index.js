import dogs from "./data.js"
import Profile from "./Profile.js"

const swipedArray = []
let likedArray = []
let nopedArray = []

let card = new Profile(dogs[0])

function render() {
    document.getElementById("profile").innerHTML = card.getProfileHtml()   
}

render()

document.addEventListener("click", function(e){
    if (e.target.dataset.like){
        handleLikeClick(e)
    }
    if (e.target.dataset.nope){
        handleNopeClick(e)
    }
})

document.addEventListener("keydown", function(e){
    if (e.code === "ArrowLeft"){
        handleNopeClick(e)
    } else if (e.code === "ArrowRight") {
        handleLikeClick(e)
    } 
})

function handleLikeClick(e){
    document.getElementById("like-sign").classList.toggle("hidden")
    card.liked()
    
    dogs.forEach(function(dog){
        if (dog.uuid === e.target.dataset.like)
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = true
    })

    swipe()
    getNewCard()
    renderNewProfile()
}

function handleNopeClick(e){
    document.getElementById("nope-sign").classList.toggle("hidden")
    card.noped()
    
    dogs.forEach(function(dog){
        if (dog.uuid === e.target.dataset.nope)
        dog.hasBeenSwiped = true
    })
    
    swipe()
    getNewCard()
    renderNewProfile()
}

function swipe(){
    swipedArray.push(card)
    
    likedArray = swipedArray.filter(function(dogProfile){
        return dogProfile.hasBeenLiked
    })

    nopedArray = swipedArray.filter(function(dogProfile){
        return (dogProfile.hasBeenSwiped && !dogProfile.hasBeenLiked)
    })
    
    console.log("likedArray after swipe: ", likedArray)
    console.log("swipedArray after swipe: ", swipedArray)
    console.log("nopedArray after swipe: ", nopedArray)

}

function getNewCard(){
    dogs.shift()
    card = (dogs.length) ? new Profile(dogs[0]) : {}
    return card
}

function renderNewProfile(){
    setTimeout(function(){
        render() ? (dogs) : {}
    }, 2000)
}




   







