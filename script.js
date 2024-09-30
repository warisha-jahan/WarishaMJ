var dropletQuantity = 50;

for (var i = dropletQuantity - 1; i >= 0; i--) {
  
  var pos = Math.floor((Math.random() * 100) + 1);
  var delay = Math.random();
  var speed = (Math.random() * 0.5) + 0.2;
  
  droplet = document.createElement("div");
  droplet.className = "droplet";
  droplet.style.left = pos + "%";
  
  TweenMax.to(droplet, speed, { y :520, delay : delay, repeat:-1,ease:Linear.easeNone});
  
  document.getElementById('rain-container').appendChild(droplet);
}


gsap.to(".plant img",{
    transform:"scale(2)",
    duration:18,
    onComplete: function() {
        document.getElementById('rain-container').remove();
    }
})