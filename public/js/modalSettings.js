// Set default field states
if (localStorage.getItem("dark-mode") == "enabled") {
	$("#toggle-dark-mode").attr("checked", "checked")
}

// $("#toggle-dark-mode").on("click", function(){toggleDarkMode();});
$("#toggle-dark-mode").on("click", ()=>{toggleDarkMode();});