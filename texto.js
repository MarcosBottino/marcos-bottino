const typed = new Typed('.typed', {
    strings: [
        '<string>La mejor página web en frente a tus ojos.</string>',
        '<string class="modificado">Programador Web.</string>',
        '<string class="modificado">Web Developer.</string>',
        '<string class="modificado">Desarrollador Web.</string>'
    ],
    StringElement: '#cadenas-texto',
    typeSpeed: 35,
    startDelay: 300,
    backSpeed: 25,
    smartBackspace: true,
    shuffle: false,
    backDelay: 650,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});