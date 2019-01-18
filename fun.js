


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

       function rsize() {
        var iframe = document.getElementById( 'inneriframe' );
         var wrapper = document.getElementById( 'wrapper' );
         var height = Math.max( document.body.offsetHeight, document.body.scrollHeight );
         iframe.src = 'https://mo4you.github.io/global/autosize.html?height='+height;      }
