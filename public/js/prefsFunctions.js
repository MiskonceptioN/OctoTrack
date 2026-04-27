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
	if (status == "enabled") {$("#getPrices").click();}
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