var chbox = document.getElementById('toggleButton');
chbox.addEventListener('change',e => {

    if (document.getElementById('toggleButton').checked) {
        document.getElementById('menu').style.width='100%'
        // document.getElementById('menu-div').style.height = ''
        document.getElementById('menu').style.display = 'flex'
    } else {
        document.getElementById('menu').style.width='0%'
        // document.getElementById('menu-div').style.height = '0'
        document.getElementById('menu').style.display = 'none'
    }
})

function transcipt(){
    var e = document.getElementById('transcript')
    if (e.getAttribute('height') === '1000px') {
        e.setAttribute('height','0')
        e.style.display = 'none'
        e.style.animation = 'blinking 2s infinite'
    } else {
        e.setAttribute('height','1000px')
        e.style.display = 'block'
        e.style.animation = 'none'

    }
}
document.getElementById('menu').style.width='0%'
document.getElementById('menu').style.display = 'none'
document.getElementById('transcript').style.display = 'none'
