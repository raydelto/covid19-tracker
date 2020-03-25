function getData(){
    fetch("http://apidashboard.somee.com/api/covid")
    .then((result)=> result.json())
    .then((data)=>{
        let table = document.getElementById("countriesTable");
        let keys = ['Country', 'TotalCases', 'TotalDeaths', 'TotalRecovered', 'TotCasesx1Mpop'];
        data.map((entry, i)=>{
            //This is a workaround for making the sortable library work.
            //TODO: Make this code more elegant
            let row = table.insertRow(i + 2);
            keys.map((key,j)=>{
                let col = row.insertCell(j);
                if(j == 0){
                    col.innerHTML = entry[key];
                    col.classList.add('font-weight-bold')                   
                    return;
                }
                col.innerHTML = entry[key] === '' ? 0 : entry[key];
                col.classList.add('text-right');

            });
        });
        //This is a workaround for making the sortable library work.
        //TODO: Make this code more elegant
        table.deleteRow(1);
    });
}
