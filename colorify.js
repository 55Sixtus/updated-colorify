// console.log('script loaded...')





function paint(color) {
    console.log(color);
    var circle = document.getElementById('circleID');
    circle.style = 'background-color:${color}';
    // circle.style = 'background-color + color';
    console.log(circle);
}