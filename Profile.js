
function Profile(data){
    Object.assign(this, data)
    
    this.getProfileHtml = function(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, uuid} = this

        return `
            <img class="profile-img" src=${avatar}>
            <div class="profile-info">
                <h4 class="profile-name">${name}, ${age}</h4>
                <p class="profile-bio">${bio}</p>
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

    this.liked = function(){
        this.hasBeenSwiped = true;
        this.hasBeenLiked = true
    }

    this.noped = function(){
        this.hasBeenSwiped = true
    }
}

export default Profile





