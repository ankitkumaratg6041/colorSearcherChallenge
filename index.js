function searchFun() {
    let filter = document.getElementById('searchInput').value.toUpperCase()
    let copyFilter = document.getElementById('copyFilter')
    copyFilter.innerHTML = filter
    copyFilter.style.color = filter

    let tableContent = document.getElementById('myTable')
    // let tableRow = tableContent.getElementsByTagName('tr')
    let tableData = tableContent.getElementsByTagName('td')

    for(var i = 0; i < tableData.length; i++) {
        let td = tableData[i]

        if(td){
            let textValue = td.textContent || td.innerHTML
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tableData[i].style.display = ""
            }else{
                tableData[i].style.display = "none"
            }
        }
    }

}