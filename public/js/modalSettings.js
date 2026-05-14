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
if (localStorage.getItem("highlight-expensive") == "enabled") {
	$("#toggle-highlight-expensive").attr("checked", "checked")
}
if (localStorage.getItem("today-colour")) {
	$("#today-colour").val(localStorage.getItem("today-colour"));
}
if (localStorage.getItem("tomorrow-colour")) {
	$("#tomorrow-colour").val(localStorage.getItem("tomorrow-colour"));
}
if (localStorage.getItem("show-graph") == "enabled") {
	$("#toggle-graph").attr("checked", "checked")
}
if (localStorage.getItem("region")) {
	$("#region-picker").val(localStorage.getItem("region"));
}

$("#toggle-dark-mode").on("click", ()=>{toggleDarkMode();});
$("#toggle-auto-refresh").on("click", ()=>{toggleAutoRefresh();});
$("#toggle-highlight-current").on("click", ()=>{toggleHighlightCurrent();});
$("#toggle-highlight-cheap").on("click", ()=>{toggleHighlightCheap();});
$("#cheap-threshold").on("change", ()=>{updateCheapThreshold();});
$("#toggle-highlight-expensive").on("click", ()=>{toggleHighlightExpensive();});
$("#expensive-threshold").on("change", ()=>{updateExpensiveThreshold();});
$("#today-colour").on("change", ()=>{updateGraphColour("today", $("#today-colour").val());});
$("#tomorrow-colour").on("change", ()=>{updateGraphColour("tomorrow", $("#tomorrow-colour").val());});
$("#toggle-graph").on("click", ()=>{toggleGraph();});
$("#region-picker").on("change", ()=>{updateRegion($("#region-picker").val());});