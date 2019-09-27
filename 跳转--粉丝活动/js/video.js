$(function () {
    var styles = ['box0', 'box1_prev', 'box2', 'box3_next', 'box4', 'box5', 'box6'];
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < styles.length; i++) {
        lis[i].className = styles[i];
    }
    var right = document.querySelector('.next');
    var left = document.querySelector('.prev');
    right.onclick = function () {
        styles.unshift(styles.pop());
        for (var i = 0; i < styles.length; i++) {
            lis[i].className = styles[i];
        }
    }
    left.onclick = function () {
        styles.push(styles.shift());
        for (var i = 0; i < styles.length; i++) {
            lis[i].className = styles[i];
        }
    }



























})