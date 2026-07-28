function fetchData() {
    return new  Promise((resolve, reject)=>{
        //Simulating error
        reject(new Error('Network Error'));
    });

}

fetchData()
.then(
    data => console.log('Data: ', data),
    error => console.log('Handle Error In then: ', error.message)

);

// Alternatuve method
fetchData()
.then(data => console.log('Data: ', data))
.catch(error => console.log('Handling error in catch: ', error));