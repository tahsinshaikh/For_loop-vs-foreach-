function forLoopTest () {
   var ran = 0
   var a = new Date()

    for (let i = 0; i < 1000000; i++) {
    	ran++
    }
    var b = new Date()
    console.log('For loop')
    console.log(`It has run ${ran} times`)
    console.log(`Total run time in ms: ${b.getTime() - a.getTime()}`)
}

var elements = []

function createArray () {
    var i = 0
    while (i < 1000000) {
        i++
        elements.push(i)
    }
    console.log(`Element Array of length ${elements.length} created`)
}


function foreachTest () {
    var ran = 0
    var a = new Date()

    elements.forEach(obj => {
        ran++
    });
    var b = new Date()

    console.log('foreach')
    console.log(`It has run ${ran} times`)
    console.log(`Total run time in ms: ${b.getTime() - a.getTime()}`)
}

forLoopTest()
console.log("\n\n\n")
createArray()
foreachTest()
