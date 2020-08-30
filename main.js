$(document).ready (onReady);
let employeeInputs = [];

function onReady (){
    $(document).on('click', '.buttonSubmitInput', submissionRequirements);
    $(document).on('click', '.delete', deletionBtn);
}

function submissionRequirements (){
    if ($('.firstNameInput').val() === '' ||
        $('.lastNameInput').val() === '' ||
        $('.idInput').val() === '' ||
        $('.titleInput').val() === '' ||
        $('.salaryInput').val() === '')
        {
            alert("You need to enter all fields!");
            return false;
        }
    else {
        addEmployeeInputs();
        totalMonthlySalaries();
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
    let el = $('.mainTable');
    //el.empty doesn't work so must set all values to empty 
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.salaryInput').val('');
    //for (let i = 0; i < employeeInputs.length; i++) { // for loop doesn't work, re-adds deleted content
        el.append(`<tr class ="employeeInputTable">
        <th>${newInputs.firstName}</th>          
        <th>${newInputs.lastName}</th>     
        <th>${newInputs.idInput}</th>    
        <th>${newInputs.title}</th>  
        <th>$${newInputs.annualSalary}</th>
        <th><button type = submit class="delete">Delete</button></th>
        </th>`) 
// tried doing ${employeeInputs[i].firstname} but DID NOT work bc of deletionBtn
//could not fix deletionBtn function ->re-adds deleted content after submitting new employee inputs
}

function deletionBtn (){
    let thisRow = $(this).closest('tr');
    console.log('removeEmployeeInput');
    thisRow.remove();
}

function totalMonthlySalaries (){
    let totalSalaries = 0;
    console.log('totalMonthlySalaries');
    $('.totalMonthlies').val('');
    for (let i = 0; i< employeeInputs.length; i++) {
        const salaryTotal = employeeInputs[i].annualSalary;
        const numberOfSalaryTotal = Number(salaryTotal);
        const monthly = numberOfSalaryTotal/12;
        totalSalaries += monthly;
        const el = $('.totalMonthlies');
        if (totalSalaries > 20000) {
            $('.totalMonthlies').css('background-color', "red");
    }   
        $('.totalMonthlies').val('');
        el.text('Total Monthly Salaries: $' + totalSalaries.toFixed(2));
}
}