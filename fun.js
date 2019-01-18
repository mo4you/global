


  function resizeIF (){
        var objBody = main.document.body;
        var objFrame = document.all["main"];
        objFrame.style.height = "0px";
        ifrmHeight = objBody.scrollHeight;
        objFrame.style.height = ifrmHeight;
  }


       function updateIFrame( height ) {
         var iframe = document.getElementById( 'main' );
         iframe.setAttribute( '+ 'height', height );
       }
