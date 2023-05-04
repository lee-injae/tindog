class Profile {
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getProfileHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, uuid} = this
        return `
            <img class="profile-img" src=${avatar}>
            <div class="profile-info">
                <h4 class="profile-name">${name}, ${age}</h4>
                <div class="profile-bio">${bio}</div>
            </div>
            
            <img class="absolute-top-left hidden" id="like-sign" src="assets/like-sign.png" alt="like-sign">
            <img class="absolute-top-left hidden" id="nope-sign" src="assets/nope-sign.png" alt="nope-sign">
            
            <section class="actions">
                <button>
                    <img class="nope-icon" 
                    id="nope-icon" 
                    src="assets/nope-icon.png" 
                    alt="nope-icon"
                    data-nope="${uuid}">
                </button>
                <button>
                    <img class="like-icon" 
                    id="like-icon" 
                    src="assets/like-icon.png" 
                    alt="like-icon"
                    data-like="${uuid}">      
                </button>
            </section>
        `
    }
}

export default Profile





