// Creating Promise

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if(success){
            resolve('Operation Successfully Completed !')
        } else {
            reject(new Error('Operation Faild !'))
        }
        
    }, 1000);
})

// Using The Promise 
myPromise
.then(result => console.log('Success; ', result))
.catch(error => console.log('Error: ', error.message));