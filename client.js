console.log("Hello World");

let salaryArray = []; //Way to store salaries
                        
let monthlyCost = 0; // Initialize monthly cost

function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();
}

function submit(event) {
    event.preventDefault();


let firstName = document.querySelector('#FirstName-input').value;
let lastName = document.querySelector('#LastName-input').value;
let iDNumber = Number(document.querySelector('#IdNumber-input').value);
let jobTitle= document.querySelector('#JobTitle-input').value;
let annualSalary = Number(document.querySelector('#AnnualSalary-input').value);
    
    
}

let monthlyColorElement = document.querySelector("#monthlyTotal");
if(monthlyCost > 20000) {
  monthlyColorElement.style.backgroundColor = "red";
}
monthlyColorElement.innerText = monthlyCost;

let submitbutton = document.querySelector('#Submit-Button');
submitbutton.addEventListener('click', submit); 

// Inside the 'submit' function, after updating monthly total
let employeeListTable = document.querySelector("#employeeList");
employeeListTable.innerHTML += ` <tr>
     <td>${firstName}</td>
     <td>${lastName}</td>
     <td>${iDNumber}</td>
     <td>${jobTitle}</td>
     <td>${annualSalary}</td>
     <td><button onClick="deleteEntry(event)">Delete</button></td>
 </tr>` ;

salaryArray.push(annualSalary);


function deleteEntry(event){
event.target.parentElement.parentElement.remove();
}  
