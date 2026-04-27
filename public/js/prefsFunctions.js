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

if (localStorage.getItem("dark-mode") == "enabled") {
	$("html").attr("data-bs-theme", "dark");
}