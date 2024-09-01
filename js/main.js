
function show_add(){

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  
  }
  toastr["info"]("tm 2daftk mnwr", "Add user");
  
  
  
  }
  function show_del(){
  
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      
      }
      toastr["error"]("2tmsh bs leeh el 2za dah", "Delete user");
      
      
      
      }
      
      function show_update(){
  
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        
        }
        toastr["success"]("tm el t3deel ya gmdan", "Update user");
        
        
        
        }
  
  function confirm_delete(id){
  
  
     let del=confirm("Do you want to delete the user ?");
     console.log(del)
     if(del==true){
          window.location.href="index.php?action=del&&id="+id;
     }
    }
  
  function edit(id){
         window.location.href="add_user.php?action=edit&&id="+id;
  }
  