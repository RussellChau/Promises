function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount === 5) {
            resolve("Nice! The coin flipped heads 5 times after " + attempts + " tries");
        } else if (attempts === 100) {
            reject("Oh crap sorry its flipped a hundered times and it still could land on heads twice");
        }

    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
