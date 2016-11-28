function showToast(message, duration){
         Materialize.toast(message, duration);
      }
      
      function showToast2(message, duration){
         Materialize.toast(message, duration, 'rounded');
      }
      function showToast3(message, duration){
         Materialize.toast('Hello World!', duration, '', function toastCompleted(){
               alert('Toast dismissed!');
            });
      };
$( document ).ready(function(){
	
});