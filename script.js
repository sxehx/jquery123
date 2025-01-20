console.log("welcome");
$(document).ready(function(){

    $("#output").load("sample.txt",function(response,statusTxt,xhr){

        $.get("https://jsonplaceholder.typicode.com/users",function(data,status){
            console.log(data,status);
        })
        $.post("https://jsonplaceholder.typicode.com/users",{
            title:"title",body:"body",function(data,status){
                console.log(data,status);
        })

        // if(statusTxt==="success")alert("Success");
        // if(statusTxt==="error")alert("Error:"+xhr.statusText);
        // console.log(response)
        // console.log(statusTxt)
        // console.log(xhr)

    })
})
    // $('input').focus(function(){
    //     $(this).css("background-color","tomato")
    // })
    // $('input').blur(function(){
    //     $(this).css("background-color","")
    // })
    // $('input').change(function(){
    //     console.log($(this).val())
    // })
    // $("#registration").submit(function(event){
    //     event.preventDefault()
    //     console.log("form successsfully submit!")
    // })
   


    // $("#btn_hide").click(function(){ 
    //     // $(".second").html("<em>this is jquery</em>");
       
        // console.log($(".second").html());
    //     console.log($("#btn_hide").val());
    //     })
    // })
    // $("body").keyup(function(event){
    //     if(event.which === 72){
    //         $(".second").hide();
    //     }
    //     if(event.which === 83){
    //         $(".second").show();
    //     
