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

function handleLikeClick(e){
    document.getElementById("like-sign").classList.toggle("hidden")
    card.liked()
    // swipedArray.push(dogs.shift())
    
    // swipedArray.forEach(function(dog){
    //     if (dog.hasBeenLiked){
    //         likedArray.push(dog)
    //     }
    // })

    swipe()
    console.log("previous card: ", card)
    getNewCard()
    console.log("new card: ", card)
    renderNewProfile()
}

function swipe(){
    swipedArray.push(dogs.shift())
    console.log("dogsarray after swipe: ", dogs)
    swipedArray.forEach(function(dog){
        if (dog.hasBeenLiked){
            likedArray.push(dog)
        }
    })

    console.log("liked array: ", likedArray)
    console.log("swiped array: ", swipedArray)
    console.log("dog array, ", dogs)

}

function getNewCard(){
    card = (dogs.length) ? new Profile(dogs[0]) : {}
    return card
}

console.log(card)
console.log(getNewCard())

function renderNewProfile(){
    setTimeout(function(){
        render() ? (dogs) : {}
    }, 2000)
}

function handleNopeClick(e){
    document.getElementById("nope-sign").classList.toggle("hidden")
    card.noped()
    
    swipedArray.push(dogs.shift())
    
    console.log("swiped array: ", swipedArray)
    console.log("noped array: ", nopedArray)



    renderNewProfile()
}


   







