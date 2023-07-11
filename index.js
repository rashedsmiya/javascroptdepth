// for (let i = 0; i < 100; i += 5){
//     console.log(i);

//     if (i === 25) {
//         console.log("ha, gotcha!");
//         break;
//     }

//     if (i === 15){
//         break;
//     }

//     console.log("This is loop", i);
    
// }


for (let i = 0; i < 100; i += 10){
    console.log(i);

    if(i === 10){
        i += 10;
        continue;
    }

    console.log('Loop number', i);

    if (i === 60){
        break;
    }

}


