// Write your solution in this file!
'use strict'

const employee = {
    "name":"Sam",
    "streetAddress":"11 Broadway"
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj= {...employee}
    newObj[key] = value
    return newObj
}

console.log(updateEmployeeWithKeyAndValue(employee,"jina","nyumbani"))
console.log(employee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee,{[key]:value})
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,"nyumba","nambaTano"))
console.log(employee)

function deleteFromEmployeeByKey(employee, key){
    let duplicatedEmployee= Object.assign({},employee)
    delete duplicatedEmployee[key]
return duplicatedEmployee
     
}
console.log(deleteFromEmployeeByKey(employee,"streetAddress"))
console.log(employee)


function destructivelyDeleteFromEmployeeByKey(employee, key){
    let duplicatedEmployee2= Object.assign(employee)
    delete duplicatedEmployee2[key]
    return duplicatedEmployee2
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"))



