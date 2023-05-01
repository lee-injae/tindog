import dogs from "./data.js"
import Profile from "./Profile.js"

const likedArray = []
const nopedArray = []
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
    console.log(dogs)
    document.getElementById("like-sign").classList.toggle("hidden")
    card.liked()

    likedArray.push(dogs.shift())
    console.log("like array: ", likedArray)
    console.log("dog array, ", dogs)
    console.log("previous card: ", card)

    card = new Profile(dogs[0])
    console.log("new card: ", card)

    renderNewprofile()
}

function getNewCard(){
    return nextDogData ? dogs.length : {}
}

function renderNewprofile(){
    setTimeout(function(){
        render() ? (dog) : {}
        // if (dogs){
        //     render()
        // } else {
        //     return {}
        // }

    }, 2000)
}

function handleNopeClick(e){
    console.log("cilckeee")

    const nope = document.getElementById("nope-sign")
    nope.classList.remove("hidden")
    nope.classList.add("absolute-top-left")
    
    dogs.forEach(function(dog){
        if (dog.uuid === e.target.dataset.nope){
            dog.hasBeenSwiped = true
        }
    })
    dogs.shift()
    console.log(dogs)

    setTimeout(function(){
        renderProfile(dogs)

    }, 2000)
}


   







