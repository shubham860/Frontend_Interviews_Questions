class Likes {
    constructor() {
        this._videoLikes = 0;
    }

    get videoLikes() {
        return this._videoLikes;
    }

    set videoLikes(likes) {
        return this._videoLikes = 2*likes;
    }

    static printLikes() {
        console.log('totalLikes static method');
    }
}

const likes = new Likes();
likes.videoLikes = 100;
console.log(likes);
console.log(Likes.printLikes()) // static methods calls with classNames