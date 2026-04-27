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
	} else {
		localStorage.setItem("highlight-cheap", "enabled");
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