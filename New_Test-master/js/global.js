let dataTimeNamber = document.querySelector('#number');
let emailValid = document.querySelector('#email');
let stan = document.querySelector('.span');
let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let anime = document.querySelector('.sign_up-text')
let data = {

   ru: ['2022','2021', '2000', '1999','1998', '1997', '1996']

}

dataTimeNamber.addEventListener('change', function() {
    let number = data[this.value]; 
    dataTimeNamber.length = 0;

    for( i = 0; i < number.length; i++){
        
        dataTimeNamber.length = 0; 
        dataTimeNamber.add(new Option(number[i]));
    }
});

document.querySelector('.blue').onclick = function(e){
    e.preventDefault();
    if(!reg.test(emailValid.value)){
        alert("Вы не правельно ввели email!")
    }else{
        return ClearFields();
    }
}

function valudate(regex, emailValid) {
    return regex.test(emailValid);
}


function ClearFields(){
    document.getElementById("textRia").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textRia-1").value = "";
    document.getElementById("textRia-2").value = "";
    document.getElementById("textRia-3").value = "";
}




