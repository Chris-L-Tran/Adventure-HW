console.log('working')

var first = ' '
var scottChoice = ' '
var sbuxChoice = ' '

function skipAhead(){
    
    alert("You took an Uber! \nCongrats. You made it on time!")
}

function scottCir(){

    while(scottChoice[0].toLowerCase() !== 'g' &&
    scottChoice[0].toLowerCase() !== 'k' &&
    scottChoice[0].toLowerCase() !== 'h'){

        scottChoice = prompt('You reach Scott Circle. You see a blind person who fell down and lost their walking stick. You can "Head" down 16th st, "Keep" Going, or "Help" The blind person. What do you do?')
    }

    if(scottChoice[0].toLowerCase() === 'g'){

    } else if (scottChoice[0].toLowerCase() === 'k'){

    } else if (scottChoice[0].toLowerCase() === 'h'){
        
    }

}

function sbux() {

    while(sbuxChoice[0].toLowerCase() !== 'g' &&
        sbuxChoice[0].toLowerCase() !== 'k'){

            sbuxChoice = prompt('You pass by a Starbucks. The smell of coffee makes you remember how tired you are. Do you: "Get" a drink, or "Keep" going?')
        }

            if(sbuxChoice[0].toLowerCase() === 'g'){

            } else if(sbuxChoice[0].toLowerCase() === 'k'){

            }

}


while(first[0].toLowerCase() !== 'u' &&
    first[0].toLowerCase() !== 'c' &&
    first[0].toLowerCase() !== 'm') {

    first = prompt("You wake up cold in an alley in DC. You have no idea how you got there, nor can you remember what you did last night. You look at your watch and see that you only have 15 minutes to sign in on Garnet for Attendance. You rush out of the alley and see that you are in Dupont Circle. Do you go down Massachusetts Ave, or Connecticut Ave?")
    
}


if (first[0].toLowerCase() === "u"){
    skipAhead()
    
} else if(first[0].toLowerCase() === "c"){
    sbux()
} else if (first[0].toLowerCase() === 'm'){

    scottCir()

}
