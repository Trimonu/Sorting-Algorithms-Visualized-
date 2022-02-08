var i = 0;
var txt = 'Sorting Algorithms Visualized'; /* The text */
var speed = 35; /* The speed/duration of the effect in milliseconds */
var temp = ""

function onLoad() {
    generateBlocks(25)
    typeWriter()
}




function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }




function generateBlocks (count) {
    console.log('generating')
    count++
    var elem = document.querySelector('#orig');
    var multipleDivisionCount = 20 / (count - 1)
    var heightincrease = (20 * multipleDivisionCount) * .8
    var setWidth = 30 * multipleDivisionCount
    /* Create Array Then Randomize*/
    array = []
    for (let int = 1; int < count; int++) {
        array.push(int)
    }
    array = shuffle(array)


    /* Loop Over Array And Create SQUARES */
    array.forEach(function(item) {

        height = item * heightincrease
        var clone = elem.cloneNode(true);

        
        clone.id = item
        clone.style = "padding-top: " + [height] + "px"
        clone.style.width = setWidth + "px"        
        // Inject it into the DOM
        elem.after(clone);
        
    })
    elem.remove()
    console.log('generated')
}




function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



function logicalExecution(object) {
    window[object.id](arguments);
}





async function Insertion() {
    console.log('Insertion cmd')
    // Vars
    arrayList = []
    speedMS = 500


    // Disable button
    document.getElementById("Insertion").disabled = true


    let bars = document.querySelectorAll('.rectangle')
    bars[0].style.backgroundColor = 'rgb(0, 225, 0)'

    for (var i = 1; i < bars.length; i++) {
        
        // 1 Before Current
        var j = i - 1

        // Store int value to ith bar to key
        var key = parseInt(bars[i].id)


        // Store ith bar height 
        var height = bars[i].style.paddingTop;

        //  Change Color Of Current Bar
        bars[i].style.backgroundColor = "#f00000"

        // To pause the execution of code for VAR milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, document.getElementById("speedRange").value * 100 / 2))


        while(j >= 0 && parseInt(bars[j].id) > key) {

            // Color (i - 1) bar
            bars[j].style.backgroundColor = "#f00000"

            // Swapping places
            bars[j + 1].style.paddingTop = bars[j].style.paddingTop
            bars[j + 1].id = bars[j].id

            j = j - 1

            // To pause the execution of code for VAR milliseconds
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, document.getElementById("speedRange").value * 100 / 2))

            console.log(document.getElementById("speedRange").value * 100 / 2)
            // Color sorted section green
            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = "#0ED100";
              }
            }
    // Placing the selected element to its correct position
    bars[j + 1].style.paddingTop = height
    bars[j + 1].id = key
        
    // To pause the execution of code for VAR milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, speedMS))
        
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = "#f00000";

    // Enable Button
    document.getElementById("Insertion").disabled = false
    }
}





function BubbleSort() {
    console.log('BubbleSort cmd')
}