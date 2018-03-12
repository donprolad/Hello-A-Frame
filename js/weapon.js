//Function handles collisions of an imp with our weapon.

on($("#weapon"), 'collide', (e)=>{
    const ball = $("#imp");
    if(e.detail.body.id === ball.body.id && !hit) {
        hit = true;
        score = score + 1;
        clearTimeout(resetId);
        resetId = setTimeout(resetImp, 2000);
    }
})

setTimeout(resetImp,3000);