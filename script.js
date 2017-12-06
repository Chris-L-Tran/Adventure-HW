console.log('working')

var first = ' '
var scottChoice = ' '
var sbuxChoice = ' '
var drinkChoice = ' '
var mChoice = ' '
var choice15 = ' '
var choice16 = ' '


function win(){

    alert("You made it to GA on time! Congrats! You sign in and sit down for the lecture.")

}

function skipAhead(){
    
    alert("You took an Uber! \nCongrats. You made it on time!")

}


function street16(){

    while(choice16[0].toLowerCase() !== 'k' &&
    choice16[0].toLowerCase() !== 'w'){

        choice16 = prompt('You reach 16th street. You see an amazing one man band playing your favoirte song. Do you stop to "watch" him, or do you "Keep" going?')

    }

        if (choice16[0].toLowerCase() === 'w'){

            alert("You stop to watch the performer. His rendition was amazing and you feel super pumped! However, You reach GA late and end up using your last tardy. You are asked to leave the program. You Lose!")

        } else if(choice16[0].toLowerCase() === 'k'){

            win()

        }
    
}

function street15(){

    while(choice15[0].toLowerCase() !== 'k' &&
    choice15[0].toLowerCase() !== 't'){


        choice15 = prompt('You reach 15th street. You see a lady sitting on a bench. She is crying. Do you go and "talk" to her, or do you "keep" going?')

    }

        if (choice15[0].toLowerCase() === 't'){

            alert("You sit down and talk to the lady. You ask her what's wrong and she tells you about her problems. You try your best to make her feel better. She's starts to smile and is relieved of her stress. She says that she is so happy someone would stop and talk with her. You feel great about yourself. However, you are late to GA and use up your last tardy. You are asked to leave the program. You lose!")
            

        } else if(choice15[0].toLowerCase() === 'k'){

            win()     

        }

}

function mStreet(){

    while(mChoice[0].toLowerCase() !== 'j' &&
    mChoice[0].toLowerCase() !== 'w'  ){
        
        mChoice = prompt('You reach M Street. You just missed the light. You can choose to "Jay" walk, or wait for the light. What do you do?')

    }

    if(mChoice[0].toLowerCase() === 'j'){

        alert("You decide to Jay walk. All of a sudden someone starts blaring their horn to the left of you. This causes you to turn and look as you are walking and BAM! you get hit by a car and get knocked out.\nAs you recover conciousness, you lay on the concret with a crowd looking down at you. You tried to get up but feel that your leg is broken. As you lay your head back down on the cold concrete, your watch beeps; signalling that the hour has passed. You are offically late for class and use up your last tardy. You are asked to leave the program. You lose!")

    } else if (mChoice[0].toLowerCase() === 'w'){

        street16()

    }
}

function scottCir(){

    while(scottChoice[0].toLowerCase() !== 'b' &&
    scottChoice[0].toLowerCase() !== 'k' &&
    scottChoice[0].toLowerCase() !== 'h'){

        scottChoice = prompt('You reach Scott Circle. You see a blind person who fell down and lost their walking stick. You can "Head" down 16th st, "Keep" Going, or help the "blind" person. What do you do?')

    }

    if(scottChoice[0].toLowerCase() === 'b'){

        alert("You go up and talk to the blind person. You talk to him and help lead them in the right direction. However, this makes you late for GA. You use up your last tardy. You are asked to leave the program. You Lose!")

    } else if (scottChoice[0].toLowerCase() === 'k'){

        street15()

    } else if (scottChoice[0].toLowerCase() === 'h'){
        
        street16()

    }

}

function sbuxDrink(){

    while(drinkChoice[0].toLowerCase() !== 'v' &&
        drinkChoice[0].toLowerCase() !== 'm' &&
        drinkChoice[0].toLowerCase() !== 'c'){
            
            drinkChoice = prompt('You enter starbucks. The line is long, but you decide to wait. You reach the counter and you get a drink. You can get a "Vanilla" latte, "Mocha", or a "Caramel" Macchiato. What drink do you get?')

            if(drinkChoice[0].toLowerCase() === 'v'){

                alert("You get a Vanilla Latte. It is delicious. But you get to GA late. and use up your last tardy. You are asked to leave the program! You lose")
                
            } else if(drinkChoice[0].toLowerCase() === 'm'){

                alert("You get a Mocha. It is hot, but the whipped cream tastes so good going down. But you get to GA late. and use up your last tardy. You are asked to leave the program! You lose")
                
            } else if (drinkChoice[0].toLowerCase() === 'c'){

                alert("You get a Caramel Macchiato. You savor the contrasting flavors of the vanilla milk with the esspresso. But you get to GA late. and use up your last tardy. You are asked to leave the program! You lose")
                
            }

        }
}

function sbux() {

    while(sbuxChoice[0].toLowerCase() !== 'g' &&
        sbuxChoice[0].toLowerCase() !== 'k' &&
        sbuxChoice[0].toLowerCase()){

            sbuxChoice = prompt('You pass by a Starbucks. The smell of coffee makes you remember how tired you are. Do you: "Get" a drink, take "N" St, or "Keep" going?')
        
        }

            if(sbuxChoice[0].toLowerCase() === 'g'){

                sbuxDrink()

            } else if(sbuxChoice[0].toLowerCase() === 'k'){

                mStreet()

            } else if(sbuxChoice[0].toLowerCase() === 'n'){

                scottCir()

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
