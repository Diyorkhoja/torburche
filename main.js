// do {
//     var num1 = +prompt('assds');
// } while (isNaN(num1) || num1 == '');

// num1 % 2 == 0 ? alert('juft') : alert('toq')

// let num1 = +prompt('sonni kiriting');
// let daraja = +prompt('darajani kiriting');
// let answer = 1;
// for (let i = 0; i < daraja; i++) {
//     answer = answer * num1;
//     console.log(answer);
// }


// ⬛️ ⬜️
// let line = ''
// let num1 = +prompt('son')
// for (let i = 0; i < num1; i++) {

//     for (let k = 0; k < num1; k++) {
//         if ((k % 2 == 0 && i % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) {
//             line += '⬛️'
//             //  line = line + '⬛️'
//         }else{
//             line += '⬜️'
//         }
//     }
//     console.log(line);
//     line = ''
// }




// let line = ''
// let num = +prompt('son')
// for (let i = 0; i < num; i++) {

//     for (let k = 0; k < num; k++) {
//         if ((k % 2 == 0 && i % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) {
//             console.log(line);
//             line += '[+]'
//         }else{
//             line += '[-]' 
//         }

//     }
//     console.log(line);
//     line = ''
// }





















// my homework

let line = '  '
let line2 = '[+]'
let num = +prompt('son')

for (let i = 0; i < num; i++) {
    let row = ''
    for (let j = 0; j < num; j++) {
        if (i == 0 || i == num-1) {
            row += line2;
        } else {
            if (j == 0 || i == j||j==num-1) {
                row += line2;
            } else {
                row += '   ';
            }
        }

    }
    console.log(row);

}
console.log("");


let son = +prompt("Qo'ylarning sonini kiriting");
let ans = 0;
for (let d = 0; d < son; d++) {
    ans = ans + 1;
    console.log("Qo'y: " + ans);
}




