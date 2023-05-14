firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html");
        alert("Successfully logged Out !")
    }
})


function logout(){
    firebase.auth().signOut()
}