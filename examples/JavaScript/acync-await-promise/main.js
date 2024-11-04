const button = document.getElementById('button');

function walkDog() {
    return new Promise(function(resolve, reject) {
        setTimeout(() =>  {
            const dogWalked = true;

            if (dogWalked) {
                resolve('You walked td');
            }
            else{
                reject('You did not walk td');
            }
        }, 1500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    } catch (error) {
        console.error(error); // Log the error message from reject
    }
}

// Call the functions
doChores();


console.log('hello');