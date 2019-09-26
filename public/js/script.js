document.getElementById('color').onchange = (e) => {
    color = e.target.value;
    document.querySelector('#not-a-unicorn-image').style.backgroundColor = color;
    //console.log(e)
}

document.querySelector('#angles').onclick = (e) => {
    e = e.target;
    if (e.classList.contains('angle')) {
        document.getElementById('square').classList.remove('shape-color');
        document.getElementById('almost-square').classList.remove('shape-color');
        document.getElementById('really-not-square').classList.remove('shape-color');
        e.classList.add('shape-color'); 
        
        let image = document.getElementById('not-a-unicorn-image');
        if (e.dataset.shape == 'square') {
            image.classList.add('square');
            image.classList.remove('really-not-square');
            image.classList.remove('almost-square');
        } else if (e.dataset.shape == 'almost-square') {
            image.classList.add('almost-square');
            image.classList.remove('really-not-square');
            image.classList.remove('square');
        } else if (e.dataset.shape == 'really-not-square') {
            image.classList.add('really-not-square');
            image.classList.remove('almost-square');
            image.classList.remove('square');
        }
    }
}