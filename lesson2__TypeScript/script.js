const input = document.querySelector('input')
input.addEventListener('blur',()=>{
    setTittle(input.value);
    getTittle()
})
function setTittle(value){
    localStorage.setItem('value', value)
}
function getTittle(){
    alert(localStorage.getItem('value'))
}


// class User{
//     name = 'Igor'
//     age = 23

//     sayName(){
//         console.log(this.name)
//     }
// }
// const user = new User()
// user.sayName() 
