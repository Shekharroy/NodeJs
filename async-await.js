async function getdata() {
    console.log('Starting...');
    const result = await someAsyncOperation();
    console.log(`Result:- ${result}`);
    return result;
    
}


function someAsyncOperation(){
    return new Promise(resolve =>{
        setTimeout(()=>resolve('Operation Completed'), 1000);
    });
}

getdata().then(data =>console.log('Final data: ', data));