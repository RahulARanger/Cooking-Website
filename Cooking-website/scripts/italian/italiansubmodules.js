

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
    setTimeout(function() { alert('Click on the picture to open the pop up Window.'); }, 1000);
 localStorage.setItem('alerted','yes');
}