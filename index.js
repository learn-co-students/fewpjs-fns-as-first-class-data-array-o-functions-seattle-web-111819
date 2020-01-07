function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// function exerciseDog(dogName, dogBreed) {
//     return routine.map(rt => rt(dogName, dogBreed));
//     // Use .map to iterate through "routine" array and return a new array by passing in arguments "dogName" && "dogBreed"

// }

// for loop
// function exerciseDog(dogName, dogBreed) {
//     let exercise = [];
//     for (let i = 0; i < routine.length; i++) {
//         exercise.push(routine[i](dogName, dogBreed));
//     }
//     return exercise;
// }


// .forEach
function exerciseDog(dogName, dogBreed) {
    let exercise = [];
    routine.forEach(function(item) {
        console.log(item(dogName, dogBreed));
    });
    return exercise;
}

// routine.forEach(myFunction);
// function exerciseDog(dogName, dogBreed) {
//     routine.forEach(element => {
        
//     });
// }