
				$(function(){
      			$(".button4").click(function(){
			      var t=$(this).parent().find('input[class*=text_box]');
			      t.val(parseInt(t.val())+1)
			      setTotal();
			      })
			      $(".button3").click(function(){
			      var t=$(this).parent().find('input[class*=text_box]');
			      t.val(parseInt(t.val())-1)
			      if(parseInt(t.val())<0){
			      t.val(0);
			      }
			      setTotal();
			      })
			      function setTotal(){
			      var s=0;
			      $("#tab td").each(function(){
			      s+=parseInt($(this).find('input[class*=text_box]').val())*parseFloat($(this).find('span[class*=price]').text());
			      });
			      $("#total").html(s.toFixed(0));
			      }
			      setTotal();
			      })
					var acc = document.getElementsByClassName("accordion");
					var i;
					for (i = 0; i < acc.length; i++) {
					acc[i].addEventListener("click", function() {
					this.classList.toggle("active");
					var panel = this.nextElementSibling;
					if (panel.style.display === "block") {
					panel.style.display = "none";
					} else {
					panel.style.display = "block";
					}
					});
					}
