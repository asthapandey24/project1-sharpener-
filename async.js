const { reject } = require("async");


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
          setTimeout(()=>{
        resolve('ticket');
          },3000)
});

     const getPopcorn = promiseWifeBringingTicks.then((t) =>{
      console.log('wife: i have the tickets');
     console.log('husband: we should go in ');
     console.log('wife no i am hungry');
     return new Promise((resolve, reject) =>resolve(`${t} popcorn`));
    });


   const getButter = getPopcorn.then((t) =>{
        console.log('husband: i got some popcorn');
        console.log('husband: we should go in');
        console.log('wife: I need butter on my popcorn');
        return new Promise((resolve, reject)=> resolve(`${t} Butter`));
    });
    const getColdDrinks = getButter.then((t) =>{   
           console.log('husband: your butter darling');    
           console.log('husband: we should go in now');
           console.log('wife: no i want coldDrinks too');
    return new Promise((resolve, reject) => resolve(`${t} coldDrink`));
 });
  getColdDrinks.then((t)=>console.log(t));


   console.log('person4: shows ticket');
   console.log('person5: shows ticket');
// //***********************************************************************************************************

 console.log('person1: shows ticket');
 console.log('person2: shows ticket');

const preMovie = async() =>{
   const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
      setTimeout(() =>resolve('ticket'), 3000);

   }) ;

   const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
   const addButter = new Promise((resolve, reject) => resolve(`butter`));
   const getColdDrinks = new Promise((resolve, reject)=> resolve(`coldDrink`));
 let ticket = await promiseWifeBringingTicks; 
 // whatever we resolve we get here and this await function is used only inside the async not in any function.
     
 console.log(`wife: i have ${ticket}`);
 console.log('husband: we should go in');
 console.log('wife: no i am hungry');

let popcorn = await getPopcorn;
        console.log(`husband: i got some ${popcorn}`);
        console.log('husband: we should go in');
        console.log('wife: I need butter on my popcorn');

let butter = await addButter;
console.log(`husband: i got some ${butter}popcorn`);
console.log('husband: anything else darling');
console.log('wife: yes,I need coldDrinks too');

let coldDrink = await getColdDrinks;

console.log(`husband: i got your ${coldDrink}`);
console.log('wife: Thankyou lets go in we are getting late');
console.log('wife: yes,I need coldDrinks too');


return ticket;
}

preMovie().then((m)=>console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
 console.log('person5: shows ticket');

//*******************************************************************************************************

// Dealing async await with promise.all concept 


console.log('person 1: shows ticket');
console.log('person2: shows ticket');

const preMovies = async() =>{

const promiseWifeBringingTickets = new Promise ((resolve, reject)=>{
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) =>resolve(`popcorn`));

const getCandy = new Promise((resolve, reject) => resolve(`candy`));

const getCoke = new Promise((resolve, reject)=>resolve(`coke`));

let ticket = await promiseWifeBringingTickets;

let [popcorn, candy, coke] = await Promise.all([getPopcorn,getCandy,getCoke])

console.log(`${popcorn}, ${candy},${coke}`);



return ticket;

}


preMovies().then((m) =>console.log(`person3: shows${m}`));

 console.log('person 4: shows ticket');
 console.log('person5: shows ticket');


//********************************************************************************************** *


console.log('person 1: shows ticket');
 console.log('person2: shows ticket');

const preMoviey = async () =>{

const promiseWifeBringingTickets = new Promise((resolve, reject) =>{
    setTimeout(() => reject('ticket'),3000);
})

let ticket 
try{
    ticket = await promiseWifeBringingTickets;
} catch(e){
    ticket = 'sad face';
}

return ticket;



}
preMoviey().then((m) =>console.log(`person3: shows${m}`));

 console.log('person 4: shows ticket');
 console.log('person5: shows ticket');

//***************************************************************************************

// question 4

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

const userUpdatepost = async() =>{

function getPosts() {
    
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost (post){

     return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve('getsresolved');
            } else {
                reject('Error: Something went wrong');
            }
        }, 1000)
    })
}


const user = {
    userName: 'vikas',
    lastActivityTime: new Date().getTime()
}
function updateLastActivityTime (){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
                resolve(user.lastActivityTime)
             
        }, 1000)
    }) 
}

let [getsresolved, updateLastActivityTimeresolves] =
   await Promise.all([createPost({title: 'Post Three', body: 'this is post three'}), updateLastActivityTime()])
       console.log('last activity time is ', updateLastActivityTimeresolves);
}

userUpdatepost();