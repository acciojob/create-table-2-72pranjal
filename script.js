let table = document.querySelector('#myTable')
function createTable() {
    //Write your code here
	 let rows = prompt("Input number of rows", "");
                let columns = prompt("Input number of columns", '');
                if(rows !== null && columns !== null) {
                    for(let i=0; i<+rows; i++) {
                        let tableRow = document.createElement('tr')
                        for(let j=0; j<+columns; j++) {
                            let tableData = document.createElement('td')
                            tableData.innerText = `Row-${i} Column-${j}`
                            tableRow.append(tableData)
                        }
                        table.append(tableRow)
                    }
                }
	
  
}
