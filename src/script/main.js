$(document).ready(function() {

    // Function to show overlay on menu hover
    $('.nav-item.dropdown').hover(function() {
        $('body').addClass("modal-overlay");
        $('.menu-overlay').addClass("result_hover");
    }, function() {
        $('body').removeClass("modal-overlay");
        $('.menu-overlay').removeClass("result_hover");
    });

    

    // On mouseout check if its clicked, else remove overlay. Click is determined by if sub menu is open or not.
    $(".nav-item.dropdown").mouseout(function() {
        if ($(".dropdown-menu").is(":visible") ) {
            if ($(".dropdown-menu").hasClass("show")) {
                $('.menu-overlay').addClass("result_hover");
            }
        }
    });

    

    // On overlay click it should close
    $('.menu-overlay').click(function() {
        $('.menu-overlay').removeClass("result_hover");
    });

    var width = $(window).width();
    var count = 0;
    if( width < 750){
        $('.pnc-sign-in .dropdown-toggle').on('click tap', function () {
            console.log("clcik");
            $(".logged-out").toggle();
        });
        console.log("mob");
    }
    else{
        $('.pnc-sign-in').hover(function() {
            $('.pnc-sign-in a').addClass("active");
        }, function() {
            $('.pnc-sign-in a').removeClass("active");
        });
        
        $(".pnc-sign-in").mouseout(function() {
            if($(".logged-out").is(":visible")) {
                if ($(".logged-out").hasClass("show")) {
                    $('.pnc-sign-in a').addClass("active");
                    $('.logged-out').show();
                }
            }
        });
        $(document).click(function() {
            $('.pnc-sign-in a').removeClass("active");
        });
    }

    $(".menu-icon-container").click(function() {
        var activeList = $(".navbar-collapse.bg-dark.collapse.show").length;
        if (!(activeList >= 1)) {
            $(this).addClass("active-menu");
        } else {
            $(this).removeClass("active-menu");
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    // Function to toggle all check box on header check.
    $('.selectall').click(function() {
        if ($(this).is(':checked')) {
            $('input:checkbox').prop('checked', true);
        } else {
            $('input:checkbox').prop('checked', false);
        }
    });
	


    // Click function to expand sort content and toggle sort icon.
    $(".sort").click(function() {
        $(".pnc-sort-mb").slideToggle("slow");
        $(this).toggleClass("expand");
    });
	// Click function to count checkbox icon.
		var countChecked = function() {
		var n = $(".mAlernate input:checked").length;
		var totalNum = $(".wrap-reward-messages .mAlernate input").length;
		if(n>0){
			$(".pnc-delete").show();
		}
		else{
			$(".pnc-delete").hide();
			$(".pnc-reward-message-table input:checkbox").prop('checked', false);
		}
		if(totalNum != n){
			$(".pnc-reward-message-table input:checkbox").prop('checked', false);			
		}
		else{
			$(".pnc-reward-message-table input:checkbox").prop('checked', true);
		}
		$( ".pnc-message-count-num" ).text("("+ n + " Selected)" );
		};
			countChecked();
		$(".wrap-reward-messages input[type=checkbox]").on( "click", countChecked );
		

		$(".all-select").click(function() {
		//	$('.pnc-reward-wrapper input:checkbox').prop('checked', true);
		var $checkbox = $('.pnc-reward-wrapper input:checkbox');
		var checkBoxes = $("input[type='checkbox']");
		(checkBoxes.prop("checked")==true)?checkBoxes.prop("checked", false):checkBoxes.prop("checked", true); 
			countChecked();
        });
        
        

	});
	