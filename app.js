let you_img = document.getElementById('you_img')
let cpu_img = document.getElementById('cpu_img')
let score = document.getElementsByClassName('score')
let btn = document.querySelectorAll('button')
let plays = document.getElementById('game_no')
let choice = document.getElementsByClassName('choice')
let result = document.getElementsByClassName('result')
let game_num = document.getElementById('game_no')
let player_score = 0;
let cpu_score = 0;
let game=0;
let options = ['Rock', 'Paper', 'Scissors']

const win = () =>{
    player_score++
    score[0].innerHTML=`score:${player_score}`
    result[0].style.display='block'
    
}
const lose = () =>{
    cpu_score++
    score[1].innerHTML=`score:${cpu_score}`
    result[1].style.display='block'
}
const draw = () =>{
    result[2].style.display='block'
    
}


const cpu_choose = ()=>{
    let num = Math.floor(Math.random()*options.length)
    // console.log(num)
    while(choice[1].innerHTML===options[num]){
        num = Math.floor(Math.random()*options.length)
    }
    // console.log(num)
    choice[1].innerHTML=options[num]
    if(num==0){
        cpu_img.src='images/rock.jpg'
    }
    if(num==1){
        cpu_img.src='images/paper.jpg'
    }
    if(num==2){
        cpu_img.src='images/scissors.jpg'
    }
}

const logic=()=>{
    let user1 = choice[0].innerHTML
    let cpu1 =  choice[1].innerHTML

    if(user1===cpu1){
        console.log('draw')
        result[2].style.display='block'
    }
    else if(user1==='Rock'){
        if(cpu1==='Scissors'){
            console.log('win')
            win()
        }else{
            console.log(user1)
            console.log(cpu1)
            console.log('lose')
            lose()
        }
    }
    else if(user1==='Paper'){
        if(cpu1==='Rock'){
            console.log('win')
            win()
        }else{
            console.log('lose')
            lose()
        }
    }
    else if(user1==='Scissors'){
        if(cpu1==='Paper'){
            console.log('win')
            win()
        }else{
            console.log('lose')
            lose()
        }
    }
}

for(key of btn){
    key.onclick= (e) =>{
        for(img of result) img.style.display='none'
        choice[0].innerHTML=e.target.innerHTML
        cpu_choose()
        logic()
        if(e.target==btn[0]){
            you_img.src='images/rock.jpg'
        }
        if(e.target==btn[1]){
            you_img.src='images/paper.jpg'
        }
        if(e.target==btn[2]){
            you_img.src='images/scissors.jpg'
        }
        game++
        game_num.innerHTML=`Game Played:${game}`
    }
}