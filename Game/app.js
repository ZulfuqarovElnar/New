
document.addEventListener("mousemove",e => {
    const dovsan = document.querySelector(".tracker");

    dovsan.style.left = `${e.clientX}px`;
    dovsan.style.top = `${e.clientY}px`;

    
});

 function eaten(kok) {
    
    kok.style.opacity = 0
    
    setTimeout(() => {
        kok.style.left = `${ Math.random()*100 }px`
        kok.style.top = `${ Math.random()*100 }px`
        kok.style.opacity=1
        
    }, 1000);
}