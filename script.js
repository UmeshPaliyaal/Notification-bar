let btnon = document.getElementById("one");
let btntw = document.getElementById("two");
let btnth = document.getElementById("three");
let ToastBox = document.querySelector(".ToastBox");

let successMsg  = '<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Error occured: please try later'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid input : check again'

btnon.addEventListener("click",() =>{
    showToast(successMsg)
    const originalClss = btnon.className
    setTimeout(() => {
        btnon.className = "BtnOne"
        setTimeout(() => {
            btnon.className = originalClss
        }, 100);
    }, 0.2);
})
btntw.addEventListener("click",() =>{
    showToast(errorMsg)
    const originalClss = btntw.className
    setTimeout(() => {
        btntw.className = "BtnTwo"
        setTimeout(() => {
            btntw.className = originalClss
        }, 100);
    }, 0.2);
})
btnth.addEventListener("click",() =>{
    showToast(invalidMsg)
    const originalClss = btnth.className
    setTimeout(() => {
        btnth.className = "BtnThree"
        setTimeout(() => {
            btnth.className = originalClss
        }, 100);
    }, 0.2);
})

function showToast(msg){
    let Toast = document.createElement('div');
    Toast.classList.add('toast');
    Toast.innerHTML = msg ;
    ToastBox.appendChild(Toast)

    if(msg.includes('Error')){
     Toast.classList.add('error')
    } else if(msg.includes('invalid')){
        Toast.classList.add('invalid')
       }

       setTimeout(()=>{
        Toast.remove()
       },5300)
}

