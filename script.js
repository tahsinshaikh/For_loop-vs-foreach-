function forLoopTest () {
   var ran = 0
   var a = new Date()
    for (let i = 0; i < 1000000; i++) {
        ran++
    }
    var b = new Date()
    console.log('For loop')
    console.log(`Function ran ${ran} times`)
    console.log(`Total ran time in ms: ${b.getTime() - a.getTime()}`)
    console.log('\n\n')
}

var elements = []
function createArray () {
    var i = 0
    while (i < 1000000) {
        i++
        elements.push(i)
    }
    console.log(`Element Array created of length ${elements.length}\n\n`)
}

function foreachTest () {
    var ran = 0
    var a = new Date()
    
    elements.forEach(() => ran++)
    
    var b = new Date()
    console.log('foreach')
    console.log(`Function ran ${ran} times`)
    console.log(`Total ran time in ms: ${b.getTime() - a.getTime()}`)
}

forLoopTest()
createArray()
foreachTest()