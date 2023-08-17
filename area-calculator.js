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
    const height = getValueById('tri-height');
    if(base == 0 || height == 0) return;
    document.getElementById('tri-area').innerText = (0.5*base*height);
}
function calculateRectangleArea(){
    const width = getValueById('rec-width');
    const length = getValueById('rec-length');
    if (width == 0 || length == 0) return;
    document.getElementById('rec-area').innerText = (width*length);
}
function calculateParallelogramArea(){
    const base = getValueById('para-base');
    const height = getValueById('para-height');
    if (base == 0 || height == 0) return;
    document.getElementById('para-area').innerText = (base*height);
}
function calculateRhombusArea(){
    const d1 = getValueById('d1');
    const d2 = getValueById('d2');
    if (d1 == 0 || d2 == 0) return;
    document.getElementById('rhombus-area').innerText = (0.5 * d1 * d2);
}
function calculatePentagonArea(){
    const peri = getValueById('penta-peri');
    const base = getValueById('penta-base');
    if (peri == 0 || base == 0) return;
    document.getElementById('penta-area').innerText = (0.5 * peri * base);
}