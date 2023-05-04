import dogs from "./data.js"
import Profile from "./Profile.js"

const swipedArray = []
let likedArray = []
let nopedArray = []
let currentProfileIndex = 0
let currentCard = new Profile(dogs[0])

function render() {
    document.getElementById("profile").innerHTML = currentCard.getProfileHtml()   
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
    yes(e)
}

function handleNopeClick(e){
    document.getElementById("nope-sign").classList.toggle("hidden")
    no(e)
}

function yes(e){
    dogs.forEach(function(dog){
        if (dog.uuid === e.target.dataset.like)
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = true
    })
    swipedProfileArrayArrange()
    currentCard.setMatchStatus(true)
    getNewProfile()
}

function no(e){
    dogs.forEach(function(dog){
        if (dog.uuid === e.target.dataset.like)
        dog.hasBeenSwiped = true
    })
    swipedProfileArrayArrange()
    currentCard.setMatchStatus(false)
    getNewProfile()
}

function swipedProfileArrayArrange(){
    swipedArray.push(currentCard)
    
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

function getNewProfile() {
    currentProfileIndex+=1
    currentCard = (currentProfileIndex < dogs.length) ? new Profile(dogs[currentProfileIndex]) : {}
    console.log("currentCard: ", currentCard)
    renderNewProfile()
}


function renderNewProfile(){
    setTimeout(function(){
        (currentCard.uuid) ? render() : noMoreProfile()
    }, 500)
}

function noMoreProfile(){
    const noMoreMsg = `
    <div class="end-msg-container">
        <div class="end-msg">That's it!</div>
    </div>
    `
    document.getElementById("profile").innerHTML = noMoreMsg
}




   







