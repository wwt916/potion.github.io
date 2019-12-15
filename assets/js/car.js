 $(function(){
      $(".button4").click(function(){
      var t=$(this).parent().find('input[class*=textbox]');
      t.val(parseInt(t.val())+1)
      setTotal();
      })
      $(".button3").click(function(){
      var t=$(this).parent().find('input[class*=textbox]');
      t.val(parseInt(t.val())-1)
      if(parseInt(t.val())<0){
      t.val(0);
      }
      setTotal();
      })
      function setTotal(){
      var s=0;
      $("#tab td").each(function(){
      s+=parseInt($(this).find('input[class*=textbox]').val())*parseFloat($(this).find('span[class*=price]').text());
      });
      $("#total").html(s.toFixed(2));
      }
      setTotal();
      })
 