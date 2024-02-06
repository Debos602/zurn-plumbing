(function ($) {
	"use strict";
	$(document).ready(function () {
		// $(".logo").html(
		// 	'<img src="assets/icon/logo.svg" class="white-logo" alt="" /><img src="assets/icon/color-logo.svg" class="colo-img" alt="" />'
		// );

		// // Set dynamic menu content
		// $(".main-menu ul").html(
		// 	'<li><a href="">SERVICES</a></li><li><a href="">ABOUT US</a></li><li><a href="">RESOURCES</a></li><li><a href="">SERVICE AREAS</a></li>'
		// );
		$(".pipe-image").beforeAfter();
		$(".guarantee").hover(
			function () {
				$(this)
					.find(".animation")
					.addClass("animate__animated wow animate__flipInX");
			},
			function () {
				$(this)
					.find(".animation")
					.removeClass("animate__animated wow animate__flipInX");
			}
		);

		$("#megaMenu").on("mouseenter", function () {
			$("#megaDropDown").addClass("show");
		});
		$("#megaDropDown").on("mouseleave", function () {
			$("#megaDropDown").removeClass("show");
		});
		$("#aboutMenu").on("mouseenter", function () {
			$("#aboutDropDown").addClass("show");
		});
		$("#aboutDropDown").on("mouseleave", function () {
			$("#aboutDropDown").removeClass("show");
		});
		$("#megaMenu").on("mouseenter", function () {
			$("#aboutDropDown").removeClass("show");
		});
		$("#resourceMenu").on("mouseenter", function () {
			$("#ResourcesDropDown").addClass("show");
		});
		$("#ResourcesDropDown").on("mouseleave", function () {
			$("#ResourcesDropDown").removeClass("show");
		});
		$("#aboutMenu").on("mouseenter", function () {
			$("#ResourcesDropDown").removeClass("show");
		});
		$("#ServiceArea").on("mouseenter", function () {
			$("#ServiceAreaDropDown").addClass("show");
		});
		$("#ServiceAreaDropDown").on("mouseleave", function () {
			$("#ServiceAreaDropDown").removeClass("show");
		});
		$("#resourceMenu").on("mouseenter", function () {
			$("#ServiceAreaDropDown").removeClass("show");
		});

		new WOW().init();

		$(window).on("scroll", function () {
			let scrollTop = $(window).scrollTop();
			if (scrollTop > 0) {
				$(".header").addClass("stick");
			} else {
				$(".home-header.header").removeClass("stick");
			}
		});
		$('.btn[data-bs-target="#offcanvasRight"]').on("click", function () {
			$(".side-btn").toggleClass("active");
		});

		$("#offcanvasRight").on("hidden.bs.offcanvas", function () {
			$(".side-btn").removeClass("active");
		});
		$('.btn[data-bs-target="#offcanvasRight"]').on("click", function () {
			$(".main-menu ul").toggleClass("active");
		});

		$("#offcanvasRight").on("hidden.bs.offcanvas", function () {
			$(".main-menu ul").removeClass("active");
		});
		if ($(".map").length > 0) {
			$(".map")
				.gmap3({
					center: [48.8620722, 2.352047],
					zoom: 4,
				})
				.marker([
					{ position: [48.8620722, 2.352047] },
					{ address: "86000 Poitiers, France" },
					{
						address: "66000 Perpignan, France",
						icon: "https://maps.google.com/mapfiles/marker_grey.png",
					},
				])
				.on("click", function (marker) {
					marker.setIcon("https://maps.google.com/mapfiles/marker_green.png");
				});
		}

		// Get all elements with class "service-item"
		const serviceItems = document.querySelectorAll(".rasidential-wrapper > li");

		// Loop through each service item
		serviceItems.forEach((rasidentialItem) => {
			// Add mouseenter event listener
			rasidentialItem.addEventListener("mouseenter", function () {
				// Get the data attribute "poster"
				let dataImg = this.getAttribute("data-poster");

				// Check if dataImg is not an empty string
				if (dataImg !== "") {
					// Set the src attribute of element with id "servicePreview"
					document.getElementById("img-priview").setAttribute("src", dataImg);
				}
			});
		});
	});
})(jQuery);
