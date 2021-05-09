// //Bai1
// let str_input = prompt('Input string:');
// str_input.split("");
// let str_output = [];
// for (let i = str_input.length - 1; i >= 0; i--) {
//     str_output.push(str_input[i]);
// }
// str_output = str_output.join("");
// alert(str_output);

// //Bai2
// let str = prompt('Input string:');
// str.split(" ")
// let str_arrUpper = [];
// for (let i = 0; i < str.length; i++) {
//     str_arrUpper.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
// }
// arr_strUpper = str_arrUpper.join(" ")
// alert(arr_strUpper);

// //Bai3
// let arr_input = prompt('Input array, separated by ","').split(",");
// console.log(arr_input);
// arr_output = [];
// for (let i = 0; i < arr_input.length; i++) {
//     if (!arr_output.includes(arr_input[i])) {
//         arr_output.push(arr_input[i]);
//     }
// }
// console.log(arr_output);
// alert(arr_output);

// //Bai 4
// let staff = [{
//         name: "Ha",
//         age: 21,
//         salary: 40000,
//         position: "manager"
//     },
//     {
//         name: "Phuong",
//         age: 20,
//         salary: 1000,
//         position: "secretary"
//     },
//     {
//         name: "Duy",
//         age: 23,
//         salary: 500,
//         position: "staff"
//     },
// ]
// console.log(staff);
// while (true) {
//     let command = prompt('Choose: \n1.Read\n2.Create\n3.Update\n4.Delete');
//     if (!command) { break; }
//     if (command === '1') {
//         for (let i = 0; i < staff.length; i++) {
//             for (let x in staff[i]) {
//                 console.log(`${x}: ${staff[i][x]}`);
//             }
//             console.log('\n');
//         }
//     } else if (command === '2') {
//         let create_Staff = {};
//         let createName = prompt('Create name:');
//         create_Staff.name = createName;
//         let createAge = prompt('Create age:');
//         create_Staff.age = createAge;
//         let createSalary = prompt('Create salary:');
//         create_Staff.salary = createSalary
//         let createPosition = prompt('Create position:');
//         create_Staff.position = createPosition;
//         console.log(create_Staff);
//         staff.push(create_Staff);
//         alert('Success!');
//         console.log(staff);
//     } else if (command === '3') {
//         let index = prompt('Input index:');
//         let value, property;
//         while (true) {
//             property = prompt('Update property:');
//             if (property === 'age' || property === 'salary') {
//                 while (true) {
//                     value = prompt('Update value:');
//                     value = Number(value);
//                     if (isNaN(value)) {
//                         alert('Enter number!');
//                     } else break;
//                 }
//                 break;
//             } else if (property === 'name' || property === 'position') {
//                 value = prompt('Update value:');
//                 value = String(value);
//                 break;
//             } else alert('Not exist!');
//         }
//         staff[index - 1][property] = value;
//         alert('Success!')
//         console.log(staff);
//     } else if (command === '4') {
//         let index = prompt('Input index:');
//         staff.splice(index - 1, 1);
//         alert('Success!');
//         console.log(staff);
//     }
// }

//Bai5
let strDate = prompt('Nhap ngay thang nam:');
let comp = strDate.split('/');
let day = Number(comp[0]);
let month = Number(comp[1]);
let year = Number(comp[2]);

let leapYear;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    leapYear = true;
} else leapYear = false;

let numOfDays;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numOfDays = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        numOfDays = 30;
        break;
    case 2:
        if (leapYear) {
            numOfDays = 29;
        } else {
            numOfDays = 28;
        }
        break;
}
let check = true;
if (year < 0) {
    alert('Ngay thang nam ko hop le!');
    check = false;
}
if (month < 1 || month > 12) {
    alert('Ngay thang nam ko hop le!');
    check = false;
}
if (day < 1 || day > numOfDays) {
    alert('Ngay ko hop le!');
    check = false;
} else { alert('Ngay thang nam ko hop le!'); }

if (check !== true);
else {
    let newDay, newMonth, newYear;
    if (day === numOfDays) {
        newDay = 1;
        if (month == 12) {
            newMonth = 1;
            newYear = year + 1;
        } else {
            newMonth = month + 1;
            newYear = year;
        }

    } else {
        newDay = day + 1;
        newMonth = month;
        newYear = year;
    }
    alert(`Ngay tiep theo la: ${newDay}/${newMonth}/${newYear}`);
}