$(function(){
  $("#roadWarrioirLink").hide();
})

function deleteFile(path){
  $.post("/delete", {path:path}, function(status){
    if(200){
      $("#roadWarrioirLink").fadeIn("fast").fadeOut("fast").fadeIn("slow");
      return console.log("sucessfull registered deletion");
    }
  });
}
