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
function getTwoDigit(value){
    return parseFloat(value.toFixed(2));
}
function addAreaInEntry(name,area){
    const element = document.getElementById('area-entry');
    const p = document.createElement('p');
    const count = element.childElementCount;
    p.innerHTML =`${count + 1}.${name} ${area} cm<sup>2</sup> <button class="btn bg-blue-500">Convert To m<sup>2</sup></button>`;
    p.classList.add('py-4');
    element.appendChild(p)
}

function calculateTriangleArea(){
    const base = getValueById('tri-base');
    const height = getValueById('tri-height');
    if(base == 0 || height == 0) return;
    const area = getTwoDigit(0.5 * base * height);
    document.getElementById('tri-area').innerText = area;
    addAreaInEntry('Triangle',area);
}
function calculateRectangleArea(){
    const width = getValueById('rec-width');
    const length = getValueById('rec-length');
    if (width == 0 || length == 0) return;
    const area = getTwoDigit(width * length);
    document.getElementById('rec-area').innerText = area;
    addAreaInEntry('Rectangle', area);
}
function calculateParallelogramArea(){
    const base = getValueById('para-base');
    const height = getValueById('para-height');
    if (base == 0 || height == 0) return;
    const area = getTwoDigit(base * height);
    document.getElementById('para-area').innerText = area;
    addAreaInEntry('Parallelogram', area);
}
function calculateRhombusArea(){
    const d1 = getValueById('d1');
    const d2 = getValueById('d2');
    if (d1 == 0 || d2 == 0) return;
    const area = getTwoDigit(0.5 * d1 * d2);
    document.getElementById('rhombus-area').innerText = area;
    addAreaInEntry('Rhombus', area);
}
function calculatePentagonArea(){
    const peri = getValueById('penta-peri');
    const base = getValueById('penta-base');
    if (peri == 0 || base == 0) return;
    const area = getTwoDigit(0.5 * peri * base);
    document.getElementById('penta-area').innerText = area;
    addAreaInEntry('Pentagon', area);
}
function calculateEllipseArea(){
    const a = getValueById('ell-a');
    const b = getValueById('ell-b');
    if (a == 0 || b == 0) return;
    const area = getTwoDigit(Math.PI * a * b);
    document.getElementById('ell-area').innerText = area;
    addAreaInEntry('Ellipse', area);
}