$(document).ready (onReady);

function onReady (){
    $(document).on('click', '.buttonSubmitInput', submissionRequirements);
    $(document).on('click', '.delete', deletionBtn);
}
let employeeInputs = [];

function submissionRequirements (){
    if ($('.firstNameInput').val() === '' ||
        $('.lastNameInput').val() === '' ||
        $('.idInput').val() === '' ||
        $('.titleInput').val() === '' ||
        $('.salaryInput').val() === '')
        {return false;
        }
    else {
        addEmployeeInputs();
    }
}



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
    let el = $('.primaryTable');
    el.empty();
    for (let i = 0; i < employeeInputs.length; i++) {
        el.append(`<tr>
        <th>${employeeInputs[i].firstName}</th>          
        <th>${employeeInputs[i].lastName}</th>     
        <th>${employeeInputs[i].idInput}</th>    
        <th>${employeeInputs[i].title}</th>  
        <th>${employeeInputs[i].annualSalary}</th>
        <th><button type = submit class="delete">Delete</button></th>
        </th>`)
    }
};



function deletionBtn (){
    let thisRow = $(this).closest('tr');
    console.log('removeEmployeeInput');
    thisRow.remove();
}