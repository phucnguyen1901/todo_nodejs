class User {
    
    constructor(userId, fullName, userName, userPW) {
        this.userId = userId;
        this.fullName = fullName;
        this.userName = userName;
        this.userPW = userPW;
    }

}
let arrayUser = data.map( (element) => new User(element.userId,element.fullName,element.userName,""));
console.log(arrayUser);
