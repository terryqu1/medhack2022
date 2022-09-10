alert("LOADED")

var knownmedicine = ['a','b'];
var medlist = document.getElementById('medlist')

knownmedicine.forEach(function(item){
    var option = document.createElement('option');
    option.value = item;
    medlist.appendChild(option);
});