// Helper function to Simulate an API call

function fetchData(id){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`Data for ID ${id}`);
        }, 1000);
    })
}


//Sequentila Operation take ~3 seconds

async function fetchSequential() {
    console.time('Sequential ...');
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);

    console.timeEnd('sequential');
    return [data1, data2, data3]
}


// Parallel  Operation -take ~1 second

async function fetchParallel() {
    console.time('Parallel.');
    const result = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
    console.timeEnd('Parallel.. ')
    return result;
}

// DemoDe

async function runDemo(){
    console.log('Running Sequentially...');
    const seqResult = await fetchSequential();
    console.log(seqResult); 


    console.log('\nRunning in Parallel...');
    const parResult = await fetchParallel();
    console.log(parResult);

}

runDemo();