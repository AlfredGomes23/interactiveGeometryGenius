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


function calculateTriangleArea(){
    const base = getValueById('tri-base');
    const hight = getValueById('tri-hight');
    if(base == 0 || hight == 0) return;
    document.getElementById('tri-area').innerText = (0.5*base*hight);
}
function calculateRectangleArea(){
    const width = getValueById('rec-width');
    const length = getValueById('rec-length');
    if (width == 0 || length == 0) return;
    document.getElementById('rec-area').innerText = (width*length);

}