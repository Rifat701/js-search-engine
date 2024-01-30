function searchFunction() {
    const input = document.getElementById("input").value.toUpperCase();
    const mainTable = document.getElementById("main_table");
    const rows = mainTable.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("th")[0];

        if (cells) {
            const cellText = cells.textContent || cells.innerText;

            if (cellText.toUpperCase().indexOf(input) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}