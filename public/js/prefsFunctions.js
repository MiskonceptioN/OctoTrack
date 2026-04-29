// Dark mode
function toggleDarkMode() {
	const status = localStorage.getItem("dark-mode");
	if (status == "enabled") {
		$("html").removeAttr("data-bs-theme");
		localStorage.setItem("dark-mode", "disabled");
	} else {
		$("html").attr("data-bs-theme", "dark");
		localStorage.setItem("dark-mode", "enabled");
	}
}

// Auto refresh
function toggleAutoRefresh() {
	const status = localStorage.getItem("auto-refresh");
	if (status == "enabled") {
		localStorage.setItem("auto-refresh", "disabled");
	} else {
		localStorage.setItem("auto-refresh", "enabled");
	}
}
function autoRefresh() {
	const status = localStorage.getItem("auto-refresh");
	if (status == "enabled" && $("#getPrices").hasClass("active")) {$("#getPrices").click();} // Only 'click' the button if the user is on the today view
	setTimeout(() => { autoRefresh(); }, 60000);
}

// Highlight current time period
function toggleHighlightCurrent() {
	const status = localStorage.getItem("highlight-current");
	if (status == "enabled") {
		localStorage.setItem("highlight-current", "disabled");
	} else {
		localStorage.setItem("highlight-current", "enabled");
	}
	// Redraw price table to apply changes
	$("#getPrices").click();
}

// Highlight cheap times
function toggleHighlightCheap() {
	const status = localStorage.getItem("highlight-cheap");
	if (status == "enabled") {
		localStorage.setItem("highlight-cheap", "disabled");
		$("#toggle-highlight-cheap-group").addClass("mb-3");
		$("#toggle-highlight-cheap-group").removeClass("mb-1");
		$("#cheap-threshold-row").addClass("d-none");
	} else {
		localStorage.setItem("highlight-cheap", "enabled");
		$("#toggle-highlight-cheap-group").addClass("mb-1");
		$("#toggle-highlight-cheap-group").removeClass("mb-3");
		$("#cheap-threshold-row").removeClass("d-none");
	}
	// Redraw price table to apply changes
	$("#getPrices").click();
}

// Set cheap threshold
function updateCheapThreshold() {
	const value = Number($("#cheap-threshold").val());
	if (typeof value === "number" && value > 0) {
		localStorage.setItem("cheap-threshold", value);
		cheapPriceThreshold = value;
	} else if (typeof value === "number" && value <= 0) {
		localStorage.setItem("cheap-threshold", 0.01);
		$("#cheap-threshold").val(0.01);
		cheapPriceThreshold = 0.01;
	}
	// Redraw price table to apply changes
	$("#getPrices").click();
}

// Highlight expensive times
function toggleHighlightExpensive() {
	const status = localStorage.getItem("highlight-expensive");
	if (status == "enabled") {
		localStorage.setItem("highlight-expensive", "disabled");
		$("#toggle-highlight-expensive-group").addClass("mb-3");
		$("#toggle-highlight-expensive-group").removeClass("mb-1");
		$("#expensive-threshold-row").addClass("d-none");
	} else {
		localStorage.setItem("highlight-expensive", "enabled");
		$("#toggle-highlight-expensive-group").addClass("mb-1");
		$("#toggle-highlight-expensive-group").removeClass("mb-3");
		$("#expensive-threshold-row").removeClass("d-none");
	}
	// Redraw price table to apply changes
	$("#getPrices").click();
}

// Set expensive threshold
function updateExpensiveThreshold() {
	const value = Number($("#expensive-threshold").val());
	if (typeof value === "number" && value > 0) {
		localStorage.setItem("expensive-threshold", value);
		expensivePriceThreshold = value;
	} else if (typeof value === "number" && value <= 0) {
		localStorage.setItem("expensive-threshold", 0.01);
		$("#expensive-threshold").val(0.01);
		expensivePriceThreshold = 0.01;
	}
	// Redraw price table to apply changes
	$("#getPrices").click();
}

// Set graph colour
function updateGraphColour(d, c) {
	const validColourRegex = /^#([0-9A-F]{3}){1,2}$/i;
	if (!validColourRegex.test(c)) {
		if (d === "today") {
			localStorage.removeItem("today-colour");
			c = "#4bc0c0";
		} else {
			localStorage.removeItem("tomorrow-colour");
			c = "#bada55";
		}
	}

	// Store new colour in local storage and update graph
	if (d === "today") {
		localStorage.setItem("today-colour", c);
		priceChart.data.datasets[0].borderColor = c;
		$("#today-colour").val(c);
	} else {
		localStorage.setItem("tomorrow-colour", c);
		priceChart.data.datasets[1].borderColor = c;
		$("#tomorrow-colour").val(c);
	}
	priceChart.update();
}

// Toggle graph
function toggleGraph() {
	const status = localStorage.getItem("show-graph");
	if (status == "enabled") {
		$("#pricing-graph").addClass("d-none");
		$("#pricing-colours-group").addClass("d-none");
		localStorage.setItem("show-graph", "disabled");
	} else {
		$("#pricing-graph").removeClass("d-none");
		$("#pricing-colours-group").removeClass("d-none");
		localStorage.setItem("show-graph", "enabled");
	}
}

// Initialize settings on page load
if (localStorage.getItem("dark-mode") == "enabled") {
	$("html").attr("data-bs-theme", "dark");
}

if (localStorage.getItem("highlight-current") == "disabled") {
	$("#toggle-highlight-current").removeAttr("checked");
}

autoRefresh();

if (localStorage.getItem("highlight-cheap") == "disabled") {
	$("#toggle-highlight-cheap").removeAttr("checked");
}

if (typeof Number(localStorage.getItem("cheap-threshold")) === "number"
	&& Number(localStorage.getItem("cheap-threshold")) >= 0 ) {
	$("#cheap-threshold").val(Number(localStorage.getItem("cheap-threshold")));
} else {
	localStorage.setItem("cheap-threshold", 5);
	$("#cheap-threshold").val(5);
}

if (typeof Number(localStorage.getItem("expensive-threshold")) === "number"
	&& Number(localStorage.getItem("expensive-threshold")) >= 0 ) {
	$("#expensive-threshold").val(Number(localStorage.getItem("expensive-threshold")));
} else {
	localStorage.setItem("expensive-threshold", 5);
	$("#expensive-threshold").val(5);
}

if (localStorage.getItem("today-colour")) {
	updateGraphColour("today", localStorage.getItem("today-colour"));
}
if (localStorage.getItem("tomorrow-colour")) {
	updateGraphColour("tomorrow", localStorage.getItem("tomorrow-colour"));
}
if (localStorage.getItem("show-graph") == "disabled") {
	$("#pricing-graph").addClass("d-none");
	$("#pricing-colours-group").addClass("d-none");
}
