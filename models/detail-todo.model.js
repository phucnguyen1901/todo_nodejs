

// let detailMoDel = (userIdNew,fullNameNew,userNameNew,userPWNew){
//     userId: userIdNew,
//     fullName: fullNameNew,
//     userName: userNameNew,
//     userPW: userPWNew
// }

class detailModel {
    
    constructor(userId, fullName, userName, userPW) {
        this.userId = userId;
        this.fullName = fullName;
        this.userName = userName;
        this.userPW = userPW;
    }
}

let dtm = new detailModel(15,20);
let arrayDetailModel = [];
arrayDetailModel.push(dtm);
console.log(arrayDetailModel[0].height)
 








