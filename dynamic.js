let names = document.getElementById('name');
let matlob = document.getElementById('matlob');
let madfoo = document.getElementById('madfoo');
let motabaqy = document.getElementById('motabaqy');
let submit = document.getElementById('submit');
let ul_list = document.getElementById('ul_list');
let searchInput = document.getElementById('searchInput');
let search_btn = document.getElementById('search-btn') 
let id = 1
var arr = [];

submit.addEventListener('click',addUser);
function addUser(){
    if(names.value != "" && matlob.value != "" && madfoo.value != ""){
        var users = {
            id : id++,
            nameUser : names.value,
            matlob : matlob.value,
            madfoo : madfoo.value,
            motabaqy : matlob.value - madfoo.value
        }
        arr.push(users);
        DrawUsers(arr) 
    }

}
function DrawUsers(listUsers){
    ul_list.innerHTML = "";
    names.value = "";
    matlob.value = "";
    madfoo.value = "";
    motabaqy.value = "";
    listUsers.forEach(function(user){
      ul_list.innerHTML += `
         <li class ="style"> <h2>${user.id} </h2> <h3>${user.nameUser} </h3> <h3>${user.matlob}</h3>
         <h3>${user.madfoo}</h3> <h3>${user.motabaqy} </h3> </li>
      `
    }); 
}

search_btn.addEventListener('click',searchInputs)
function searchInputs(){
    let values = searchInput.value
      if(values!=""){
         let searched = arr.filter(function(looped){
            return looped.nameUser.includes(values)
         });
         DrawUsers(searched);
         search_btn.innerHTML = "return";
         searchInput.value = ""
      }else{
        search_btn.innerHTML = "search"
        DrawUsers(arr)
      }
}

// function editor(sentence){
//     return sentence.toLowerCase().trim();
// }