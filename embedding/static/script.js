alert("LOADED")

var knownmedicine = ['a','b'];
var medlist = document.getElementById('medlist')

knownmedicine.forEach(function(item){
    var option = document.createElement('option');
    option.value = item;
    medlist.appendChild(option);
});

const addbtn = document.getElementById('add')
const allmed = document.getElementById('allmed')


addbtn.addEventListener('click', createnewmed)
function createnewmed(){
    var newmed = document.createElement('input')
    newmed.type = 'text'
    newmed.setAttribute('list','medlist')
    allmed.insertBefore(newmed,addbtn)
    var br = document.createElement('br')
    allmed.insertBefore(br, addbtn)
}