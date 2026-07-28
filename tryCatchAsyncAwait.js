const fs = require('fs').promises;

async function loadUserData(userId) {
    try{
        const data = await fs.readFile(`users/${userId}.json`, 'utf-8');
        const user = JSON.parse(data);

        if(!user.email) {
            throw new Error(`Inavlaid user data: missing email`);
        }

        return user;
    }catch(error) {
        // Handle different error types
        if(error.code  === 'ENOENT'){
            throw new Error(`User ${userId} not found`);
        }else if (error instanceof SyntaxError){
            throw new Error('Inavalid user data formate.');
        }
        // Re-throw other error
        throw error
    } finally {
        // Clean code that run weather successful or not
        console.log(`Finished processing user ${userId}`) 
    }
}

// Usage
(async () =>{
    try{
        const user = await loadUserData(123);
        console.log('User loaded', user);
    }catch(err){
        console.error('Failed to load user: ', err.message);
    }
})();

