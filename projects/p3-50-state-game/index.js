// This is a subset of the states.
// Use this to actually run the game
// (assume this is the full set of states.
// This will make it easier to test.
const holder = ["Idaho", "South Dakota", "Hawaii", "Alaska", "Alabama", "New York"];
var states = ["Idaho", "South Dakota", "Hawaii", "Alaska", "Alabama", "New York"];
var playing = true; var h3 = 0, h2 = 0
var x

// These are all the states. It maps the state name to the number which you'll
// want to use in your API call.
var abvMap = {
    "Alabama": "01",
    "Alaska": "02",
    "Arizona": "04",
    "Arkansas": "05",
    "California": "06",
    "Colorado": "08",
    "Connecticut": "09",
    "Delaware": "10",
    "District Of Columbia": "11",
    "Florida": "12",
    "Georgia": "13",
    "Hawaii": "15",
    "Idaho": "16",
    "Illinois": "17",
    "Indiana": "18",
    "Iowa": "19",
    "Kansas": "20",
    "Kentucky": "21",
    "Louisiana": "22",
    "Maine": "23",
    "Maryland": "24",
    "Massachusetts": "25",
    "Michigan": "26",
    "Minnesota": "27",
    "Mississippi": "28",
    "Missouri": "29",
    "Montana": "30",
    "Nebraska": "31",
    "Nevada": "32",
    "New Hampshire": "33",
    "New Jersey": "34",
    "New Mexico": "35",
    "New York": "36",
    "North Carolina": "37",
    "North Dakota": "38",
    "Ohio": "39",
    "Oklahoma": "40",
    "Oregon": "41",
    "Pennsylvania": "42",
    "Rhode Island": "44",
    "South Carolina": "45",
    "South Dakota": "46",
    "Tennessee": "47",
    "Texas": "48",
    "Utah": "49",
    "Vermont": "50",
    "Virginia": "51",
    "Washington": "53",
    "West Virginia": "54",
    "Wisconsin": "55",
    "Wyoming": "56",
}


/*
 * The majority of this project is done in JavaScript.
 *
 * 1. Start the timer when the click button is hit. Also, you must worry about
 *    how it will decrement (hint: setInterval).
 */
$("#button").on("click", function(){
    document.getElementById("timer").innerHTML = "20"
    states = holder
    document.getElementById("input").disabled = false
    $("#stateListHolder").empty()

    let deadline = 20
    x = setInterval(function() { 
        deadline-=1
        //var seconds = (deadline); 
        document.getElementById("timer").innerHTML = deadline; 
            if (deadline < 0) { 
                clearInterval(x); 
                document.getElementById("input").disabled = true
                for(st of states){
                    $("#stateListHolder").append("<h2>"+st+"</h2>")
                }
                document.getElementById("timer").innerHTML = "You got "+(holder.length-states.length)+" out of "+ holder.length; 
            } 
        }, 1000); 
        
    
})
/* 
 * 2. Check the input text with the group of states that has not already been
 *    entered. Note that this should only work if the game is currently in
 */
$('#input').on( 'keyup', function () {
    if(!playing)
        return
    //console.write("Something is happening")
    var hold = states
    var guess = document.getElementById("input").value

    arr = guess.split(" ")
    s = ""
    for (str of arr) {
        if(s != ""){
            s+= " "
        }
        s += (str.charAt(0).toUpperCase() + str.toLowerCase().slice(1))
    }

    if (states.includes(s)) {// I need to display the guessed states
        states = states.filter(function(ele){
            return ele!=s
        })

        //practice api call
        $.get(`https://api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:${abvMap[s]}&LAN=625`, function(data, error){
                var amnt = ""; var cnt = 0;
                for(let i = data[1][0].length-1; i >= 0; i-- ){
                    if(cnt != 0 && cnt%3 == 0)
                        amnt = ","+amnt
                    amnt = data[1][0].charAt(i) + amnt
                    cnt+=1
                    //console.log(ch)
                }
                console.log(`${data[1][0]}\namnt: ${amnt}`)
                if(data.length == 0){
                    alert("state does not exist")
                }
            })
        //practice api call

        $("#stateListHolder").append(`<h3 id="display${h3}">${s}</h3>`)

    //if(h3==0){
        eid = `#display${h3}`
        $(eid).hover(function () {
            let th = $(eid).textContent
            console.log(th)
        }, function (){
            console.log("something's gotta change " )
        })
        h3+=1
    //}

        console.log(document)
    }

    if(hold != states){
        console.log(states)
        document.getElementById("input").value = ""
    }

    if(states.length == 0){
        playing = false
        document.getElementById("timer").innerHTML = "You Win!";
        clearInterval(x);
        document.getElementById("input").disabled = true
    }

    if(playing == false){//disable the input box
        console.log("playing = false")
    }
});


//function to display number of spanish speakers


 /* 
 * 3. Realize when the user has entered all of the states, and let him/her know
 *    that he/she has won (also must handle the lose scenario). The timer must
 *    be stopped as well.
 *
 * There may be other tasks that must be completed, and everyone's implementation
 * will be different. Make sure you Google! We urge you to post in Piazza if
 * you are stuck.
 */
