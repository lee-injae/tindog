import dogs from "./data.js"
import Profile from "./Profile.js"

const likedArray = []
const nopedArray = []
const card = new Profile(dogs[0])

function render() {
    document.getElementById("profile").innerHTML = card.getProfileHtml()   
}

render()

// function getNewCard(){
//     const nextDogData = dogs.shift()
//     return nextDogData ? dogs.length : {}
// }

console.log(dogs.shift())

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
    // console.log(e.target.dataset)
    // console.log(dogs)
    card.liked()
    

    
    // console.log(dogs)

    // dogs.shift()
    // console.log(dogs)
    setTimeout(function(){
        renderProfile(dogs)

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


   







