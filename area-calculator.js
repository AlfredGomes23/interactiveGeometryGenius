function getValueById(id){
    const element = document.getElementById(id);
    const value = parseFloat(element.value);
    document.getElementById(id).value = '';
    if(isNaN(value)){
        alert('Please input number only.');
        return 0;
    }
    if(value <0){
        alert('Please input positive number only.');
        return 0;
    }
    return value;
}
function showElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden')
}
function calculateTriangleArea(){
    const base = getValueById('tri-base');
    const hight = getValueById('tri-hight');
    // if(base == 0 || hight == 0) return;
    document.getElementById('tri-area').innerText = (0.5*base*hight);
    showElementById('area');
}