const posts = [

    {title: 'Post One', body:'This is post one', createdAt:new Date().getTime()},
    {title:'Post Two', body:'This is post two', createdAt:c = new Date().getTime()}
];

let intervalId = 0;

function getPost(){
    setInterval(() =>{
    clearInterval(intervalId);
    let output = '';
    for(let i =0; i<posts.length; i++){
        output += `<li> ${posts[i].title} - created ${((new Date().getTime() - posts[i].createdAt)/1000) } seconds ago</li>`
    }
    document.body.innerHTML = output;
},1000)
}

function createdPost(post, callback){
    setTimeout(() =>{

        posts.push({...post, createdAt:new Date().getTime() });

        callback()
    }, 2000)
}

function created4thPost(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback()
    }, 6000)
}

// getPost()

createdPost({title:'Post Three', body:'this is post three'}, getPost);

created4thPost({title:'Post Four', body:'this is post four'}, getPost);



var timer;
var count =0;
 function lastEditedInSecondsAgo(){
   count = 0;
    clearInterval(timer)
    timer = setInterval(() =>{
    count ++;
     console.log(count);
}, 5000);
}