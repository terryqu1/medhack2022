var knownmedicine = [a,b,c,ab,de,ces];
var medlist = document.getElementById(medlist)

knownmedicine.forEach(function(item){
    var option = document.createElement('option');
    option.value = item;
    medlist.appendChild(option);
});