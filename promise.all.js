

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPosts() {
    
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
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
function updateLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
                resolve(user.lastActivityTime)
             
        }, 1000)
    }) 
}
function userUpdatepost() {
    Promise.all([createPost({title: 'Post Three', body: 'this is post three'}), updateLastActivityTime()])
    .then(([createPostresolves, updateLastActivityTimeresolve]) => {
        console.log('Last activity time is',updateLastActivityTimeresolve)
    }).catch(err => console.log(err))
}

userUpdatepost();




