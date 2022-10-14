// let n = Number(prompt('nhap n: '));

// function isSquareNumber(n){
// for(let i=0; i<n;i++){
//     if(n/i==i){
//         return true;
//     }
// }
// return false;
// }

// isSquareNumber(n)?console.log(`${n} la so chinh phuong`) : console.log(`${n} khong phai la so chinh phuong`);


//bai 2

// function vbDigit(){
//     let dg = Number(prompt('nhap so vao: '));
//     if(handleDigitVb(dg) == true) console.log('la so vb');
//     else console.log('khong phai so vb'); 
// }
// function handleDigitVb(dg){
//     let chuc = Math.floor(dg/10);
//     let dvi = Math.floor(dg%10); 
//     let sum = chuc+dvi;
//     let multiply = chuc*dvi;
    
//     if(dg%chuc==0 && dg%dvi==0 && dg%sum==0 && dg%multiply==0) return true;
//     return false

// }
// vbDigit();


//bai 3
// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
//     }
// let start = Number(prompt('nhap so dau tien: '));
// let end = Number(prompt('nhap so cuoi cung'));
// for(let i=start; i<=end; i++){
//     if(isSquareNumber(i)) console.log(i);
// }


//bai4
// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
// }
// let start = Number(prompt('nhap so dau tien: '));
// let end = Number(prompt('nhap so cuoi cung'));
// for(let i=start; i<=end; i++){
//     if(isSquareNumber(i)) {
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }

//bai 5
// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
// }
// let start = Number(prompt('nhap so dau tien: '));
// let end = Number(prompt('nhap so cuoi cung'));
// let sum = 0;
// for(let i=start; i<=end; i++){
//     if(isSquareNumber(i)) {
//         sum+=i;
//     }
// }
// console.log(sum)


//bai 6
// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
// }
// let start = Number(prompt('nhap so dau tien: '));
// let end = Number(prompt('nhap so cuoi cung'));
// let count = 0;
// for(let i=start; i<=end; i++){
//     if(isSquareNumber(i)) {
//         count++;
//     }
// }
// console.log(count);


//bai 7

// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
// }
// let start = Number(prompt('nhap so dau tien: '));
// let end = Number(prompt('nhap so cuoi cung'));
// let sum = 0;
// let count = 0;
// for(let i=start; i<=end; i++){
//     if(isSquareNumber(i)) {
//         sum+=i;
//         count++;
//     }
// }
// console.log(sum/count);


//bai 8
let arr = [1,3,4,7,9,11,16,77,101,32,51,17,36,45,49,51]
/*
arr.sort(function(a,b) {
    return a-b;
})
console.log(arr[arr.length-1]);
*/
let temp = arr[0];
for(let i = 1; i<arr.length-1;i++){
    if(temp<arr[i+1]) temp = arr[i+1]
}
console.log(temp)