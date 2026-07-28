// Simulate an API call fails

async function fetchUserdata(){
    try{
        // Simulating a failed API request
        const response = await simulateHttpRequest();
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();
        console.log('User data: ', user);
        return user
    }catch(error){
        console.error('Error in fetchUserdata: ', error.message);
        throw error; // Re-throw the error
    }
}


//Simulating the HTTP request that fails

function simulateHttpRequest(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
             resolve({
                ok: false,
                status: 404,
                json: () => Promise.resolve({error: 'Not found'})
            });
        }, 1000);
       
    });

}   


//using catch with an async function

fetchUserdata().catch(error =>{
    console.log('Caught outside of async function: ', error.message);
});