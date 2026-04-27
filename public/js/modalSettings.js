// Set default field states
if (localStorage.getItem("dark-mode") == "enabled") {
	$("#toggle-dark-mode").attr("checked", "checked")
}
if (localStorage.getItem("auto-refresh") == "enabled") {
	$("#toggle-auto-refresh").attr("checked", "checked")
}

$("#toggle-dark-mode").on("click", ()=>{toggleDarkMode();});
$("#toggle-auto-refresh").on("click", ()=>{toggleAutoRefresh();});