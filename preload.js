const {dialog} = require('electron').remote;
const fs = require('fs');
const gm = require('gm');
var htmlToImage = require('html-to-image');


const run = () => {
    document.getElementById('pixel').oninput = () => {
        let imgWidth = Math.round(Math.pow(2, pixel.value/10)) + 'px';
        let imgHeight = Math.round(Math.pow(2, pixel.value/10)) + 'px';
        document.getElementById('pixelHeight').value = imgWidth;
        document.getElementById('pixelWidth').value = imgHeight;
        document.getElementById('img-render').style.width = imgWidth;
        document.getElementById('img-render').style.height = imgHeight;
        if (document.getElementById('not-a-unicorn-image')) {
            document.getElementById('not-a-unicorn-image').style.width = imgWidth;
            document.getElementById('not-a-unicorn-image').style.height = imgHeight;
        }
    }

    document.getElementById('sendUnicorn').onclick = () => {
        dialog.showOpenDialog({
        properties: ['openFile'] ,
        filters: [
            { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }
        ]}).then(file => {
            let bitmap = fs.readFileSync(file.filePaths[0]);
            let data_uri = new Buffer(bitmap).toString('base64');
            let imgHeight = document.getElementById('pixelHeight').value;
            let imgWidth = document.getElementById('pixelWidth').value;
            let img = document.createElement('img');
            img.setAttribute("id", "not-a-unicorn-image");
            img.style.width = imgWidth;
            img.style.height = imgHeight;
            img.src = file.filePaths;
            document.getElementById('img-render').innerHTML = '';
            document.getElementById('img-render').appendChild(img);
            document.getElementById('img-render').style.width = imgWidth;
            document.getElementById('img-render').style.height = imgHeight;
        })
    }

    document.getElementById('goToUnicornParadise').onclick = () => {
        if (document.getElementById('not-a-unicorn-image')) {
            htmlToImage.toPng(document.getElementById('not-a-unicorn-image'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'bestIconEver.jpeg';
                link.href = dataUrl;
                link.click();
            });
        } else {
            console.log('Salut Baptiste! Ouai, non, tu ne peux pas uploader une non-image, mais bien essayé!')
        }
    }
}

window.addEventListener('DOMContentLoaded', run)



