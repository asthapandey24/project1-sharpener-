





function saveinLocalStorage(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const discription = event.target.discription.value;
    const category = event.target.category.value;
    const myObj = {
        expense,
        discription,
        category
    }
    localStorage.setItem( myObj.discription,JSON.stringify(myObj));

    displayUser(myObj)


}


window.addEventListener('DOMContentLoaded', (event) => { 
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
       // addNewLineElement(user)
       displayUser(user);
    })
});    


function displayUser(user){
const parentNode = document.getElementById('Users');
const childHTML = `<li id = ${user.discription} >${user.expense} - ${user.discription} - ${user.category}
<button onClick = deleteUser('${user.discription}')>Delete</button>
<button onclick = edituser('${user.discription}','${user.expense}')>Edit</button> </li>`

parentNode.innerHTML = parentNode.innerHTML + childHTML;



}



function deleteUser(discription){
    localStorage.removeItem(discription);
   removeItemfromScreen(discription);
}


function removeItemfromScreen(discription){

    const parentNode = document.getElementById('Users');
    const elem = document.getElementById(discription);
     parentNode.removeChild(elem);

}



function edituser(discription , expense){
 document.getElementById('id1').value = discription;
 document.getElementById('id0').value = expense;

  deleteUser(discription);
}