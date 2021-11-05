
document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });
    
    
    gsap.to(".cursor", {
      x: mouseX,
      y: mouseY 
    });
  })
  
  // verander vorm
  const items = document.querySelectorAll(".item");
  const cursorshape = document.querySelector('.shape');
  
  // console.log(items);

  items.forEach(item => {
    RollItOver(item, 'white');
  })

 function RollItOver(vorm, kleur) {
    
    vorm.addEventListener('mouseover', function() {
      cursorshape.style.backgroundColor = kleur;
  })

    vorm.addEventListener('mouseout', function() {
      cursorshape.style.backgroundColor = 'var(--off-color)';
    })
};


