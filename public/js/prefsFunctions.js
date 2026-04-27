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

// Initialize settings on page load
if (localStorage.getItem("dark-mode") == "enabled") {
	$("html").attr("data-bs-theme", "dark");
}

autoRefresh();