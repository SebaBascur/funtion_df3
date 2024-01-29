document.addEventListener('DOMContentLoaded', function () {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            this.style.backgroundColor = 'black';
        });
    });

    document.addEventListener('keydown', function (event) {
        const key = event.key.toLowerCase();
        let newColor;

        switch (key) {
            case 'a':
                newColor = 'pink';
                break;
            case 's':
                newColor = 'orange';
                break;
            case 'd':
                newColor = 'lightskyblue';
                break;
            case 'q':
                newColor = 'purple';
                break;
            case 'w':
                newColor = 'grey';
                break;
            case 'e':
                newColor = 'brown';
                break;
            default:
                return;
        }

        const keyDiv = document.getElementById('key');
        keyDiv.style.backgroundColor = newColor;
    });
});
