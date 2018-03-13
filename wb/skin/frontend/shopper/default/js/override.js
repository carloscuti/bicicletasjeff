jQuery(document).ready(function() {
    jQuery(window).scrollTop(0);
    var altoSlider = jQuery("#sobreponerContenido").height();
    var controller = new slidebars();
    controller.init();

    function closeAny() {
        controller.close();
    }
    if (jQuery(window).width() >= 767) {
        jQuery(".filtrosTitle").addClass("active");
    }
    //product accordion
    jQuery('.product-tabs-container p.tab-heading a').click(function() {
        jQuery('.product-tabs li.active').toggleClass('active');
        jQuery('#' + jQuery(this).parent().attr('id').replace("product_acc_", "product_tabs_")).toggleClass('active');
        that = jQuery(this).parent();
        if (jQuery(that).is('.active')) {
            jQuery(that).toggleClass('active');
            jQuery(that).next().slideToggle(function() {
                jQuery(that).scrollToMe();
            });
        } else {
            jQuery('.product-tabs-container p.tab-heading.active').toggleClass('active').next().slideToggle();
            jQuery(that).toggleClass('active');
            jQuery(that).next().slideToggle(function() {
                jQuery(that).scrollToMe();
            });
        }
        return false;
    });
    jQuery('.product-tabs-container p:first').toggleClass('active');
    jQuery('.product-tabs a').click(function() {
        jQuery('.product-tabs-container p.tab-heading.active').toggleClass('active');
        jQuery('#' + jQuery(this).parent().attr('id').replace("product_tabs_", "product_acc_")).toggleClass('active');
    });
    jQuery(".filtroElemento dt").click(function() {
        jQuery(".filtroElemento").find(".configurable-swatch-list").find("li").css("display", "block");
        jQuery(this).parent().find("dd").stop().slideToggle();
        jQuery(this).parent().stop().toggleClass("active");
    });
    jQuery(".filtrosTitle").click(function() {
        jQuery("#narrow-by-list.product-filters").stop().slideToggle();
        jQuery(this).stop().toggleClass("active");
    });
    jQuery('.js-toggle-left-slidebar').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        controller.toggle('slidebar');
    });
    jQuery(controller.events).on('opened', function() {
        jQuery('[canvas="container"]').addClass('js-close-any-slidebar');
    });

    jQuery(controller.events).on('closed', function() {
        jQuery('[canvas="container"]').removeClass('js-close-any-slidebar');
    });
    jQuery('body').on('click', '.js-close-any-slidebar', function(event) {
        event.stopPropagation();
        controller.close();
    });
    if (jQuery(window).width() < 980) {
        jQuery("[off-canvas]").append(jQuery(".header-wrapper .menuContainer").find(".nav-container"));
        jQuery("[off-canvas]").addClass("activeResponsive");
        jQuery(".header-container").addClass("activeResponsive");
    }
    jQuery(window).resize(function() {
        if (jQuery(window).width() < 980) {
            jQuery("[off-canvas]").append(jQuery(".header-wrapper .menuContainer").find(".nav-container"));
            jQuery("[off-canvas]").addClass("activeResponsive");
            jQuery(".header-container").addClass("activeResponsive");
        } else {
            if (jQuery("[off-canvas]").hasClass("activeResponsive")) {
                jQuery("[off-canvas]").removeClass("activeResponsive");
                jQuery(".header-container").removeClass("activeResponsive");
                jQuery(".header-wrapper .menuContainer").append(jQuery("[off-canvas]").find(".nav-container"));
            }
            closeAny();
        }
    });
});
jQuery(window).resize(function() {
    ActualizarAnchoProductos();
});
/* LOADER */
/*
jQuery(window).bind('beforeunload', function() {
    jQuery('#loaderMask').fadeIn(100);
    setTimeout(function() {
        jQuery(window).scrollTop(0);
    }, 101);
});
jQuery(window).on("load", function() {
    jQuery('#loaderMask').fadeOut(300);
    ActualizarAnchoProductos();
});
*/
function ActualizarAnchoProductos() {
    if (jQuery(window).width() < 768) {
        jQuery(".product-slider-container").each(function() {
            if (jQuery(window).width() < 480) {
                var anchoItem = jQuery(this).find(".jcarousel-container").width() - 1;
            } else {
                var anchoItem = jQuery(this).find(".jcarousel-container").width() - 1 / 2;
            }
            jQuery(this).find(".products-grid").children("li").each(function() {
                jQuery(this).css("max-width", anchoItem);
                console.log(jQuery(this));
                console.log(anchoItem);
            });
        });
    }
    jQuery("div.category-products .products-grid").children("li").each(function() {
	    var resizeW = jQuery(this).find('a.product-image').width();
	    jQuery(this).find('img').css("max-width", resizeW+'px');
	    jQuery(this).find('img').css("max-height", resizeW+'px');
	    jQuery(this).find('a.product-image').css("min-height", resizeW+'px');
    });
}
/* LOADER */
