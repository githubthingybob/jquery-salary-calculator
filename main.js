$(document).ready (onReady);

function onReady (){
    $(document).on('click', '.buttonSubmitInput', addEmployeeInputs)
    displayEmployeeInputs();
}
let employeeInputs = [];

function addEmployeeInputs (){
    console.log('addEmployeeInputs');
    const newInputs = {
        firstName: $('.firstNameInput').val(),
        lastName: $('.lastNameInput').val(),
        idInput: $('.idInput').val(),
        title: $('.titleInput').val(),
        annualSalary: $('.salaryInput').val(),
    }
    employeeInputs.push(newInputs);
    displayEmployeeInputs();  
}


function displayEmployeeInputs (){
    console.log('displayEmployeeInputs');
    let el = $('.mainTable');
    el.empty();
    for (let i=0; i<employeeInputs.length; i++){
        el.append(`
        <tr class = "employeeTableInputs">
        <th>${employeeInputs[i].firstName}</th>
        <th>${employeeInputs[i].lastName}</th>
        <th>${employeeInputs[i].idInput}</th>
        <th>${employeeInputs[i].title}</th>
        <th>${employeeInputs[i].annualSalary}</th>
        <th><button type = submit class="delete">Delete</button></th>
        </tr>`);
    }
    $('.delete').on('click', removeEmployeeInput);
    function removeEmployeeInput() {
        console.log('removeEmployeeInput');
        let employeeInputs = $('.employeeTableInputs');
        employeeInputs.remove();
    }
}

