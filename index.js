$('.container-2').css("visibility", "hidden");

$('.submit').click(function(){
  $('.container-2').css("visibility", "visible");
  $('.container-1').css("visibility", "hidden");
});

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) =>{
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})
