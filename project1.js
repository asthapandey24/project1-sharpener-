

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



    axios.post("https://crudcrud.com/api/291afd8dbc5e41088fd91b663b66b58f/ExpenseData",myObj)
     .then((response)=>{
        displayUser(response.data)
        console.log(response) 
     })
     .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(err)
     })


   // localStorage.setItem( myObj.discription, JSON.stringify(myObj));

    //displayUser(myObj)


}


 window.addEventListener('DOMContentLoaded', (event) => { 
    axios.get(" https://crudcrud.com/api/291afd8dbc5e41088fd91b663b66b58f/ExpenseData ")
    // interview question 
    // const data = axios.get("https://crudcrud.com/api/49efc82b0e5644908d91615fb6292b23/ExpenseData  ")
       .then((response) =>{
        console.log(response)
        for(var i=0; i< response.data.length; i++){
            displayUser(response.data[i])
        }
       })
       .catch((error)=>{
         console.log(error)
       })
       // console.log(data)(javascript waits for none it will give Promise but not a data )(concept of event loop )
   //  Object.keys(localStorage).forEach(key => {
       // const user = JSON.parse(localStorage.getItem(key))
       // addNewLineElement(user)
      // displayUser(user);
    //})
});    


function displayUser(user){
 
    // document.getElementById('expense').value = '',
    // document.getElementById('discription').value = '',
    // document.getElementById('category').value = ''


 const parentNode = document.getElementById('Users');
 const childHTML = `<li id = ${user._id} >${user.expense} - ${user.discription} - ${user.category}
 <button onClick = deleteUser('${user._id}')>Delete</button>
<button onclick = edituser('${user._id}','${user.expense}','${user.discription}')>Edit</button> </li>`

 parentNode.innerHTML = parentNode.innerHTML + childHTML;



 }


 function deleteUser(userId){
      axios.delete(`https://crudcrud.com/api/291afd8dbc5e41088fd91b663b66b58f/ExpenseData/${userId}`)
      .then((response)=>{
        removeItemfromScreen(userId);
        console.log(response)
      })
    .catch((err)=>{
        console.log(err)
    })

     //localStorage.removeItem(discription);
    //removeItemfromScreen(id)
 }


 function removeItemfromScreen(userId){
      

    const parentNode = document.getElementById('Users')
    const elem = document.getElementById(userId)
     parentNode.removeChild(elem)

 }



 function edituser(userId,discription , expense){
  document.getElementById('id1').value = discription;
  document.getElementById('id0').value = expense;

   deleteUser(userId);
 }



// DOMCONTENTLOADED(Why do we need it)
// the main use of this is that when once HTML is loaded on screen then script will run 












