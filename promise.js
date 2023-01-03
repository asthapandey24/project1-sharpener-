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

function createdPost(post){
    return new Promise((resolve , reject) =>{
    setTimeout(() =>{

        posts.push({...post, createdAt:new Date().getTime() });
        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject("Error: something went wrong");
        }
        
    }, 2000);
    });
}

function deletePost(){
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
        if(posts.length>0){
            const lastElement = posts.pop()
            resolve(lastElement);
        }
        else{
            reject('Array is empty now');
        }

        },1000);
    })
}

createdPost({title:'Post Three', body:'this is post three'})
.then(() =>{
    getPost()
    deletePost().then(() =>{
        getPost();
        deletePost().then(() =>{
            getPost();
            deletePost().then(() =>{
                getPost()
                deletePost().then(() =>{})
                .catch((err) =>{
                    console.log('Inside catch block',err);
                })
            }).catch((err) =>{console.log('error')})
        }).catch((err) => {console.log('error')})
    }).catch((err) =>{console.log('error')})
})
.catch(err => console.log(err))




 function created4thPost(post){
    return new Promise((resolve, reject) =>{
     setTimeout(() =>{
         posts.push({...post, createdAt: new Date().getTime()});

         const error = false;

        if(!error){
            resolve();
        }
        else{
            reject("Error: something went wrong");
        }

    }, 6000)
});
}



// createdPost({title:'Post Three', body:'this is post three'}, getPost);

 created4thPost({title:'Post Four', body:'this is post four'})
 .then(() =>{
    getPost()
    deletePost().then(() =>{
        getPost();
        deletePost().then(() =>{
            getPost();
            deletePost().then(() =>{
                getPost()
                deletePost().then(() =>{
                    getPost();
                    deletePost().then(() =>{})
                    .catch((err) =>{
                        console.log('Inside catch block me',err);
                    }) 
                }).catch((err) =>{console.log('error')})
            }).catch((err) =>{console.log('error')})
        }).catch((err) => {console.log('error')})
    }).catch((err) =>{console.log('error')})
})
.catch(err => console.log(err))



