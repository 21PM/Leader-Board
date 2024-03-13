

let data = [
    {
        firstName : 'Rohit',
        LastName : 'Sharma',
        country : 'India',
        playerScore :120

    },
    {
        firstName : 'Virat',
        LastName : 'Kohli',
        country : 'India',
        playerScore : 100

    },
    {
        firstName : 'Paras',
        LastName : 'More',
        country : 'India',
        playerScore :265

    }, 
    {
        firstName : 'ab',
        LastName : 'de villiers',
        country : 'South Africa',
        playerScore : 350

    }
]

let FName = document.querySelector(".fName");
let LName = document.querySelector(".lName");
let PCountry = document.querySelector(".pCountry");
let PScore = document.querySelector(".pScore");
let btn = document.querySelector('.button');

// console.log(btn);

// console.log(FName,LName,PCountry,PScore,btn);

btn.addEventListener('click',(e) =>{
    e.preventDefault();


    if(FName.value != "" || LName.value != "" || PCountry.value != "", PScore.value != ""){
        let playerObj = {
            firstName : FName.value,
            LastName : LName.value,
            country : PCountry.value,
            playerScore :Number(PScore.value)
        };
    
        data.push(playerObj);
    
        UpdateData();
    
        FName.value = "";
        LName.value = "";
        PCountry.value = "";
        PScore.value = "";  
    }
    

});

function UpdateData() {
    data.sort((p1, p2) => {
        return p2.playerScore - p1.playerScore;
    });

    let innerHTML = "";

    data.forEach((items) => {
        innerHTML += `
            <div class="button-group">
                <span>${items.firstName}</span>
                <span>${items.LastName}</span>
                <span>${items.country}</span>
                <span>${items.playerScore}</span>
                <div>
                    <span class="material-symbols-outlined">delete</span>
                    <span class="add">+5</span>
                    <span class="sub">-5</span>
                </div>
            </div>`;
    });
    
    var section2 = document.getElementById('section2');
    section2.innerHTML = innerHTML;

    activateEventListener();
}
    const activateEventListener = () =>{
        document.querySelectorAll('.button-group').forEach((el,index)=>{
            el.addEventListener('click',(e)=>{
                if(e.srcElement.classList.value ==='add'){
                    data[index].playerScore +=5
                }else{
                    data[index].playerScore -=5
                }
                UpdateData();
            })
        })
    }

// console.log(data);

// ********* We can use any of the line from below two lines***********//
document.onload = UpdateData(); 
document.addEventListener('onload',UpdateData());
