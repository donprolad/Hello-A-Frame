let hit = false;
let resetId = 0;

// Function to reset the imp

const resetImp = () => {
    clearTimeout(resetId)
    $("#imp").body.position.set(0, 0.6, -4)
    $("#imp").body.velocity.set(0, 5.0)
    $("#imp").body.angularVelocity.set(0, 0,0)
    hit = false
    resetId = setTimeout(resetImp, 6000)
}