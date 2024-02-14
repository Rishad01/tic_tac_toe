let boxes=document.querySelectorAll(".box");
let turn=document.querySelector(".turn");
let reset=document.getElementById('reset');
reset.addEventListener("click",()=>{location.reload();});
let player="O";
const arr=new Array(9).fill("z");
turn.innerHTML="Turn: Player O";
window.addEventListener("load", (event) => {
    freshSet();
  });

  function freshSet()
  {
    boxes.forEach(box=>{
        let i=box.id;
        //console.log(i);
        if(i<6)
        {
            box.style.borderBottom = 'solid black';
        }
        if(i%3 != 0)
        {
            box.style.borderLeft = 'solid black';
        }
        
        box.addEventListener("click",boxclicked);
    });
  }

  let boxclicked=(event)=>
  {
    let boxId=event.target.id;
    console.log(arr);
    arr[boxId]=player;
    //console.log(arr[box]);
    document.getElementById(boxId).querySelector('h1').innerHTML=player;
    if(check(player)==1)
    {
        console.log(`${player} has Won`);
        boxes.forEach(box=>{
            let i=box.id;
            //console.log(i);
            
            box.removeEventListener("click",
                boxclicked);
        });
        turn.innerHTML=`${player} has Won`;
    }
    else if(check(player)==0)
    {
        console.log(`Match Drawn`);
        boxes.forEach(box=>{
            let i=box.id;
            //console.log(i);
            
            box.removeEventListener("click",
                boxclicked);
        });
        turn.innerHTML=`Match Drawn`;
    }
    else 
    {
        if(player=="O")
        player="X";
        else
        player="O";
        turn.innerHTML=`Turn: Player ${player}`;
    }
    console.log(arr);
  }

  function check(player)
  {
    if(arr[0]==player)
    {
        if(arr[1]==player && arr[2]==player)
        return 1;
        else if(arr[4]==player && arr[8]==player)
        return 1;
        else if(arr[6]==player && arr[3]==player)
        return 1;
    }
    else if(arr[8]==player)
    {
        if(arr[5]==player && arr[2]==player)
        return 1;
        else if(arr[7]==player && arr[6]==player)
        return 1;
    }
    else if(arr[4]==player)
    {
        if(arr[5]==player && arr[3]==player)
        return 1;
        else if(arr[7]==player && arr[1]==player)
        return 1;
        else if(arr[6]==player && arr[2]==player)
        return 1;
    }

    let c=0;
    arr.forEach(i=>{
        if(i!="z")
        {
            c++;
            //console.log(c);
        }
    });

    console.log(c);
    if(c==9)
    {
        return 0;
    }
    else
    {
        return -1;
    }
  }

  