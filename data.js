import { generateUuid } from "./utils.js"

const dogs = [
    {
        name: "Rex",
        avatar: "assets/dog-rex.jpeg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        uuid: generateUuid()
    },{
        name: "Bella",
        avatar: "assets/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        uuid: generateUuid()
    },
    {
        name: "Teddy",
        avatar: "assets/dog-teddy.jpeg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false,
        uuid: generateUuid()
    }
]

export default dogs