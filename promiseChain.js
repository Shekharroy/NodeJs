
function getUser(userId){
    return new Promise((resolve, reject)=>{
        // Simulating database csll
        setTimeout(() => {
            resolve({id:userId, name: 'John'});
        }, 1000);
    })
}

function getUserPosts(user) {
    return new Promise((resolve, reject)=>{
        //Simulating API call
        setTimeout(()=>{
            resolve(['post1', 'post2', 'post3']);
        }, 1000)
    })
}

// Chain the promises

getUser(123)
.then(user => {
    console.log('User: ', user);
    return getUserPosts(user);
})
.then(posts =>{
    console.log('Posts: ', posts);
})
.catch(error => {
    console.log('Error', error)
});

// Using Asyn/Await

async function fetchUserData() {
  try {
    const user = await getUser(123);
    console.log('User:', user);

    const posts = await getUserPosts(user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserData();