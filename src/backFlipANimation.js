var rotation = function (){
   $("#backFlip").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}
// $(document).ready(function() {
//     rotation();
// });
