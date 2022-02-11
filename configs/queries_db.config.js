let queries = {}
queries.getUser = "SELECT * FROM USERS";
queries.registerUser = "INSERT INTO USERS(fullName,userName,userPW) VALUES($1,$2,$3)"
queries.loginUser = "SELECT * FROM USERS WHERE userName=$1 and userPW=$2"
queries.checkUserExist = "SELECT * FROM USERS WHERE userName=$1"

export default queries;






