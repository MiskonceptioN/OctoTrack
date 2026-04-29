// Set default preferences
if (localStorage.getItem("dark-mode") == undefined) {localStorage.setItem("dark-mode", "disabled")}
if (localStorage.getItem("auto-refresh") == undefined) {localStorage.setItem("auto-refresh", "disabled")}
if (localStorage.getItem("highlight-current") == undefined) {localStorage.setItem("highlight-current", "enabled")}
if (localStorage.getItem("highlight-cheap") == undefined) {localStorage.setItem("highlight-cheap", "enabled")}
if (localStorage.getItem("cheap-threshold") == undefined) {localStorage.setItem("cheap-threshold", "5")}
if (localStorage.getItem("highlight-expensive") == undefined) {localStorage.setItem("highlight-expensive", "enabled")}
if (localStorage.getItem("expensive-threshold") == undefined) {localStorage.setItem("expensive-threshold", "5")}
if (localStorage.getItem("today-colour") == undefined) {localStorage.setItem("today-colour", "#4bc0c0")}
if (localStorage.getItem("tomorrow-colour") == undefined) {localStorage.setItem("tomorrow-colour", "#bada55")}