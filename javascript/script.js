function klick() {
    let searching = document.getElementById("searching")
    
    let field = document.getElementById("xsearch").value
    
    if (field === "" || field === " " ) {
        searching.innerHTML = "<p>Nothing to Show</p>"
        return
    } 

    field = field.toLowerCase()

    let result = ""
    let title = ""
    let description = ""

for (let find of data) {
    title = find.title.toLowerCase()
    description = find.description.toLowerCase()
    if (title.includes(field) || (description.includes(field)))
    result += `
    <div class="search-results">
                <h2>${find.title}</h2>
                    <p>
                        ${find.description}
                    </p>
                    <p class="link"><a href=${find.link} target="_blank">${find.information}</a></p>
            </div>
    `
    
}

    if (!result) {
    result = "<p>Nothing to Show</p>"
}

    searching.innerHTML = result
}