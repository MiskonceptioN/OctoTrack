// Set default field states
if (localStorage.getItem("dark-mode") == "enabled") {
	$("#toggle-dark-mode").attr("checked", "checked")
}
if (localStorage.getItem("auto-refresh") == "enabled") {
	$("#toggle-auto-refresh").attr("checked", "checked")
}
if (localStorage.getItem("highlight-current") == "enabled") {
	$("#toggle-highlight-current").attr("checked", "checked")
}
if (localStorage.getItem("highlight-cheap") == "enabled") {
	$("#toggle-highlight-cheap").attr("checked", "checked")
}

$("#toggle-dark-mode").on("click", ()=>{toggleDarkMode();});
$("#toggle-auto-refresh").on("click", ()=>{toggleAutoRefresh();});
$("#toggle-highlight-current").on("click", ()=>{toggleHighlightCurrent();});
$("#toggle-highlight-cheap").on("click", ()=>{toggleHighlightCheap();});
$("#cheap-threshold").on("change", ()=>{updateCheapThreshold();});