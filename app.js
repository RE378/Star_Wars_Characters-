$(document).ready(function(){
    console.log("JQuery is loaded");
    $("#btns").on("click",function(){
        var ramdomNumber=Math.ceil(Math.random()*88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${ramdomNumber}.json`,function(data){
     $('#img1').attr('src',data['image']);
     $(".name").text(` Name : ${data['name'].toUpperCase()}`)
     $(".born").text(`Born : ${data['born']} , Born Location : ${data['bornLocation']}`)
     $(".died").text(`died : ${data['died']} , Died Location : ${data['diedLocation']}`)
     $(".species").text(`Species : ${data['species'].toUpperCase()}`)
     $(".height").text(`Height : ${data['height']}`)
     $(".mass").text(`Mass : ${data['mass']}`)
     $(".Gender").text(`Gender : ${data['gender'].toUpperCase()}`)
     $(".homeworld").text(`Homeworld : ${data['homeworld'].toUpperCase()}`)
     $(".masters").text(`Masters : ${data['masters']}`)
    $(".head2").removeClass("hidden");
    $(".head1").addClass("hidden");
    $("#img1").removeClass("hidden")
    })
    })
    
   
})