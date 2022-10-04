var counter=0;
var array = [];
var formData =null;
function onSubmit(e){
    event.preventDefault();
    formData = readData();  
    insertNewItem(formData);
    
    for(let i =0;i<formData.length;i++){
        array[i] = formData["item"];
    }

}

function readData(){
    var formData= {};
    formData["item"] = document.getElementById('item').value;
    return formData;
}

function insertNewItem(data){
    counter= counter +1;

    if((duplicate(formData,data))==0){
        alert('Item already exist in the table');
    }
    else{

    var table = document.getElementById('grocerry-list');
    var newRow = table.insertRow(table.length);

    var row1_data0 = newRow.insertCell(0);
    row1_data0.innerHTML= counter;

    var row1_data1 = newRow.insertCell(1);
    row1_data1.innerHTML = data.item;

    var row1_data2 = newRow.insertCell(2);
    row1_data2.innerHTML = '<a class=" text-decoration-none text-success fs-5" href="#" onClick="deleteItem(this)">Delete<a>';
    
    }
}

function duplicate(formData,data){
   
    // for(let i =0;i<formData.length;i++){
    //     if((array[i])== ){
    //         return 0;
    //     }
    //     else{
    //         return 1;
    //     }
    // }

}
function deleteItem(td){
    if(confirm('Are you sure you want to delete this record?')){
        row_delete = td.parentElement.parentElement;
        var index =row_delete.rowIndex;
        document.getElementById('grocerry-list').deleteRow(index);
        
       
        // for(let i= index+1; i< counter; i++){
        
        // }
    }    
}

{/* <i class="fa-solid fa-delete-left" style= "color: green";></i> */}