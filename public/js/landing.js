const box1 = $(".box1H2") 
const box2 = $(".box2H2") 

box1.on('click', function () {
    $(".box1").toggleClass("show");
    $(".box2").attr("class", "box2");
    $(".loginForm").toggle("slow")
    $(".createForm").toggle(false)
    $(".brandStatement").toggle(false)
});
box2.on('click', function () {
    $(".box2").toggleClass("show");
    $(".box1").attr("class", "box1")
    $(".createForm").toggle("slow")
    $(".loginForm").toggle(false)
    $(".brandStatement").toggle(false)
});



