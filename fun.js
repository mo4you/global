


  function resizeIF (){
        var objBody = main.document.body;
        var objFrame = document.all["main"];
        objFrame.style.height = "0px";
        ifrmHeight = objBody.scrollHeight;
        objFrame.style.height = ifrmHeight;
        return;
  }

  function resizeIF2 (){
        var objBody = main.document.body;
        var objFrame = document.all["main"];
        ifrmHeight = objBody.scrollHeight;
        objFrame.style.height = ifrmHeight;
        return;
  }
