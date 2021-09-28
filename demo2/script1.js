var currentTab = 0;
function showTab(n){
    var x = document.getElementsByClassName('input-group');
    x[n].getElementsByClassName.display='block';
    if(n==0){
        document.getElementById('prev').style.display='none';
    }
    else{
        document.getElementById('prev').style.display='block';
    }
    if(n==(x.length-1)){
        document.getElementById('next').innerHTML='Submit';
    }
    else{
        document.getElementById('next').innerHTML='Next';  
    }
}
