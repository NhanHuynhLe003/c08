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
// let arr = [1,3,4,7,9,11,16,77,101,32,51,17,36,45,49,51]
// let temp = arr[0];
// for(let i = 1; i<arr.length-1;i++){
//     if(temp<arr[i+1]) temp = arr[i+1]
// }
// console.log(temp)


//bai 9
// let arr = [15, 20, 12, -17, 10, -6, -34, -9, 0, 35, 21, 5];
// let res = [];
// arr.sort(function(a,b) {
//     return a-b;
// })

// for(let i=0; i<arr.length;i++){
//     if(arr[i]<0 && arr[i+1] >= 0){
//         console.log('so am lon nhat la: '+arr[i])
//     }
// }


//bai 10
// let nums = [1, 20, 16, -17, 10, -6, -34, -9, 4, 35, 25, 5, 100, 131];
// function isSquareNumber(n){
//     for(let i=0; i<n;i++){
//         if(n/i==i){
//             return true;
//         }
//     }
//     return false;
// }
// function swap(arr,a,b){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
// function checkSNumberSmallest(nums){
// for(let i=0; i<nums.length; i++){
//     for(let j = i+1; j<nums.length-1;j++){
//         if(!(nums[i]>nums[j])) continue;
//         if(nums[i]>nums[j]) swap(nums,i,j);
//     }
// }
// for(let i=0;i<nums.length;i++){
//     if(isSquareNumber(nums[i])) return nums[i];
//     }
// }
// console.log(checkSNumberSmallest(nums));



//bai 11
// let nums = [-1,-6,-9,-33,-15,-18];
// function checkSoDuong(nums){
//     for(let i = 0; i<nums.length;i++){
//         if(nums[i]>0) return true;
//     }
//     return false
// }

// if(checkSoDuong(nums))console.log('ton tai so nguyen duong');
// else console.log('khong ton tai so nguyen duong')

//bai 12

// let nums = [-1,-6,-9,-33,-15,-18];
// function checkSoDuong(nums){
//     for(let i = 0; i<nums.length;i++){
//         if(nums[i]>0) return false;
//     }
//     return true;
// }
// if(checkSoDuong(nums))console.log('Arr toan am');
// else console.log('ton tai so duong')



//bai 13
// let nums = [1, 20, -17, 10, -6, -34, -9,  35, 5];

// function isExistSquareNum(nums){
//     function isSquareNumber(n){
//         for(let i=0; i<n;i++){
//             if(n/i==i){
//                 return true;
//             }
//         }
//         return false;
//     }

//     for(let i=0;i<nums.length;i++){
//         if(isSquareNumber(nums[i])) return true;
//     }
//     return false
// }

// if(isExistSquareNum(nums))console.log('ton tai so chinh phuong');
// else console.log('khong ton tai so chinh phuong')



//bai 14
// let nums = [4,16,25,100,121];

// function isExistSquareNum(nums){
//     function isSquareNumber(n){
//         for(let i=0; i<n;i++){
//             if(n/i==i){
//                 return true;
//             }
//         }
//         return false;
//     }
//     let count = 1;
//     for(let i=0;i<nums.length;i++){
//         if(isSquareNumber(nums[i])) {  
//         count++;
//         }
//     }
//     if(count === nums.length) return true;
//     return false
// }

// if(isExistSquareNum(nums))console.log('toan so chinh phuong');
// else console.log('co so ko phai so chinh phuong')

//bai 15
let nums = [1,2,3,5,4]
function kiemTraTangDan(nums){
    let count = 1;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length-1;j++){
            if(nums[i]<nums[j]) count++;
        }
    }
    if(count === nums.length) return true
    return false
}

if(kiemTraTangDan(nums)) console.log('mang tang dan')