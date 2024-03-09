
// function closestMinMax(arr){
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let minIdx = -1;
//     let maxIdx = -1;
//     let dis = Infinity;
//     let ans = ;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == min){
//             if(maxIdx == -1){
//                 minIdx = i;
//             }else {
//                 minIdx = i;
//                 if(dis > Math.min(dis,Math.abs(maxIdx - minIdx))){
//                     dis = Math.min(dis,Math.abs(maxIdx - minIdx));
//                     ans = [minIdx,maxIdx]
//                 }
//             }
//         }else if(arr[i] == max){
//             if(minIdx == -1){
//                 maxIdx = i;
//             }else {
//                 maxIdx = i;
//                 if(dis > Math.min(dis,Math.abs(maxIdx - minIdx))){
//                     dis = Math.min(dis,Math.abs(maxIdx - minIdx));
//                     ans = [minIdx,maxIdx]
//                 }
                

//             }
//         }
//     }
//     return [dis,ans]
// }
// console.log("output : ",closestMinMax([1,6,2,6,3,1,3,6,2,2,2,1,4,1,2,2,6,2,1,1,5,5,1]));

// function countGafterA(arr){
//     let ans = 0;
//     let countG = 0;
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i] == 'g'){
//             countG++
//         }
//         if(arr[i] == 'a'){
//             ans += countG
//         }
//     }
//     return ans;
// }
// console.log("output : ",countGafterA(['a','d','g','c','a','a','g','a','g']))

// function findEquilibrium(arr){
//     let len = arr.length;
//     let pf = ;
//     for(let i=0;i<len;i++){
//         if(i==0){
//             pf[i] = arr[i]
//         }else{
//             pf[i] = pf[i-1]+arr[i]
//         }
//     }
//     for(let i=1;i<len;i++){
//         let right = pf[len-1] - pf[i];
//         let left = pf[i-1];
//         if(left == right){
//             return i;
//         }
//     }
//     return pf
// }
// console.log("output : ",findEquilibrium([1,2,3,4,0,8,0,0,0,10]))

// function allSubArraySum(arr){
//     let sum = 0;
//     let n = arr.length;
//     for(let i=0;i<n-1;i++){
//         sum += arr[i] * (n-i) * (i+1);
//     }
//     return sum;
// }
// console.log("output : ",allSubArraySum([1,2,3,4,0,8,0,0,0,10]))

// function maxSubArraySumKSize(arr){
    
// }
// console.log("output : ",maxSubArraySumKSize([1,2,3,4,0,8,0,0,0,10]))
// const starContainer = document.querySelector("#star_container");
// const countElement = document.querySelector("#count");
// const starArr = document.querySelectorAll(".star");
// let pidx = 0;

// starContainer.addEventListener("click", function (e) {
//     // console.log("click occured");
//     // console.log("target", e.target);
//     if (e.target == starContainer)
//         return;
//     // get the idx of your star
//     const cStar = e.target;
//     const idx = cStar.dataset.idx;
//     // update color till that idx 
//     fillcolors(idx);
//     countElement.textContent = idx;
//     pidx = idx;
// })

// starContainer.addEventListener("mouseover", function (e) {
//     if (e.target == starContainer)
//         return;
//     // get the idx of your star
//     const cStar = e.target;
//     const idx = cStar.dataset.idx;
//     // update color till that idx 
//     fillcolors(idx);
//     // console.log("hover occured");
// })
// starContainer.addEventListener("mouseleave", function () {
//     fillcolors(pidx);
// })
// // DRY principle -> do not repeat yourself
// // SRP -> single responsibilit principle
// function fillcolors(idx) {
//     // update color till that idx 
//     // reset the colors
//     for (let i = 0; i < starArr.length; i++) {
//         starArr[i].classList.remove("yellow");
//     }
//     //add the color
//     for (let i = 0; i < idx; i++) {
//         starArr[i].classList.add("yellow");
//     }
// }

// function Node(data){
//     this.data = data
//     this.next = null
//   }

// function insertLL(A,B,C){
// let head = A;
//       let count = 1;
//       if(C == 0) {
//           let temp = new Node(B);
//           temp.next = head;
//           A = temp;
//       } else{
//           while(head != null){
//               if(count == C) {
//                 let temp = new Node(B);
//                 let headNext = head.next;
//                 head.next = temp;
//                 temp.next = headNext;
//               }
              
//               count++;
//               if(C == count){
//                 head.next = new Node(B);
//                 head = head.next;
//               }
//               head = head.next;
//           }
//       }
//       console.log(count,C)
      
//       return A;
// }
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// var addTwoNumbers = function(l1, l2) {
//     let p1 = l1;
//     let p2 = l2;
//     let sumll = new ListNode(0);
//     let head = sumll;
//     let carry = 0;
//     while(p1 || p2){
//         let sum = 0;
//         if (p1) {
//             sum += p1.val;
//             p1 = p1.next;
//         }
//         if (p2) {
//             sum += p2.val;
//             p2 = p2.next;
//         }
//         sum += carry;
//         carry = Math.floor(sum/10);
//         sum = sum % 10;
//         head.next = new ListNode(sum);
//         head = head.next;
//     }
//     if(carry){
//         let n = new ListNode(carry); // create a new node with sum as its value
//         head.next = n;
//         head = head.next;
//     }
//     return sumll.next;
// };
// let val1 = {
// val:9,
// next:{
// val:9,
// next:{
// val:9,
// next:{
//     val:9,
//     next:{
//         val:9,
//         next:{
//             val:9,
//             next:{
//                 val:9,
//                 next:null
//                 }
//             }
//         }
//     }
// }
// }
// }
// let val2 = {
//     val:9,
//     next:{
//         val:9,
//         next:{
//             val:9,
//             next:{
//                 val:9,
//                 next:null
//                 }
//             }
//         }
//     }
// console.log("Add Two Numbers ",addTwoNumbers(val1,val2))

// var threeSum = function(nums) {
//     nums = nums.sort((a,b)=>a-b)
//     let ans = 
//     for(let i=0;i<nums.length;i++){
//         if(i>0 && nums[i] == nums[i-1]){
//             continue;
//         }
//         let left = i+1;
//         let right = nums.length-1;
//         while(left<right){
//             let sum = nums[i] + nums[left]+nums[right]
//             if(sum>0) {
//                right--
//             } else if(sum<0) {
//                 left++
//              }else{
//                 ans.push([nums[i],nums[left],nums[right]]);
//                 left++
//                 while(nums[left] === nums[left - 1] && left < right) {
//                     left++
//                 }
//             }
//         }
//     }
//     return ans;
// };
// console.log("3 sum ",threeSum([-1,0,1,2,-1,-4]))

// var isPathCrossing = function(path) {
//     let dir = {N:1,E:1,W:-1,S:-1}
//     let sum = [0,0];
//     for(let i=0;i<path.length;i++){
        
//         if(path[i] == "N" || path[i] == "S"){
//             sum[1] += dir[path[i]];
//         }else {
//             sum[0] += dir[path[i]];
//         }
//         console.log(path[i],sum)
//         if(sum[0] == 0 && sum[1] == 0) return true
//     }
    
//     return false;
// };

// console.log("isPathCrossing :",isPathCrossing('NNSWWEWSSESSWENNW'))
// var threeSumClosest = function(nums,target) {
//     nums = nums.sort((a,b)=>a-b)
//     let ans = 0
//     let minDiff = Infinity;
//     for(let i=0;i<nums.length;i++){
//         let left = i+1;
//         let right = nums.length-1;
//         while(left<right){
//             let sum = nums[i] + nums[left]+nums[right];
//             let diff = Math.abs(sum - target);
//             if(diff < minDiff){
//                 ans = sum;
//                 minDiff = diff
//             }
//             if(sum>target) {
//                right--;
//             } else{
//                 left++;
//             }
//         }
//     }
//     return ans;
// };
// console.log("3 sum ",threeSumClosest([-1,2,1,-4],1))

// function fourSum(nums,target){
//     nums = nums.sort((a,b)=>a-b)
//     let ans = ;
//     for(let i=0;i<nums.length;i++){
//         if(i==0 && nums[i] == nums[i-1]) continue;
//         let left = i+1;
//         let right = nums.length-1;
//     }
// }
// console.log("$ sum  :",fourSum([1,0,-1,0,-2,2],0))

// function customSetTimeout(fn, givenTime) {
//   let timer = Date.now() + givenTime;
//   while (true) {
//     if (timer <= Date.now()) {
//       fn();
//       return;
//     }
//   }
// }

// function customSetleterval(fn, time) {
//   function tempFn() {
//     fn();
//     customSetTimeout(tempFn, time);
//   }
//   customSetTimeout(tempFn, time);
// }
// let a = 0;
// function newFunc() {
//   console.log(a++);
// }
// customSetleterval(newFunc, 2000);

// function flattenObj(obj){
//    let temp = {};
//    for(let key in obj){
//     if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
//         let innerObj = flattenObj(obj[key]);
//         for(let subObj in innerObj){
//             temp[key+"."+subObj] = innerObj[subObj]
//         }
//     }else{
//         temp[key] = obj[key]
//     }
//    }
//    return temp;
// }
// var obj = {
//    a: "akash",
//    b:"soni",
//    c:{
//       d:{
//          e:[1,8],
//          f:2,
//          g:3,
//       },
//       h:{
//          i: {
//             kk : "11"
//          }
//       }
//    }
// }
// console.log("flattenObj ", flattenObj(obj));
// function fn() {
//     let count = 1;
//     return function inner(args){
//         if(!args) return count;
//         count+= args;
//         return inner
//     }
// }
// console.log("Curry function :  ", fn(1)(2)(3)(4)(0));
// function flattenArray(arr){
//    let temp = ;
//    function flatArray(arr) {
//      arr.forEach((i) => {
//        if (Array.isArray(i)) {
//          flatArray(i);
//        } else {
//          temp.push(i);
//        }
//      });
//    }
//    flatArray(arr);
//    return temp;
// }
// var arr = [1,2,3,[4,5,[6,[7,8,[9]]]]];
// console.log("Flat Array : ", flattenArray(arr));

// Array.prototype.myMap = function (callback) {
//   let newArray = ;
//   let x = this.length;
//   for (let i = 0; i < x; i++) {
//     let counter = callback(this[i]);
//     newArray.push(counter);
//   }
//   return newArray;
// };
// Array.prototype.myFilter = function (callback) {
//   let newArray = ;
//   let x = this.length;
//   for (let i = 0; i < x; i++) {
//     let counter = callback(this[i]);
//     if (counter == true) newArray.push(this[i]);
//   }
//   return newArray;
// };
// Array.prototype.myReduce = function (callback) {
//   let value = 0;
//   let x = this.length;
//   for (let i = 0; i < x; i++) {
//     callback(value += this[i]);
//   }
//   return value;
// };
// let arr = [1, 2, 3,4];
// let val = arr.myReduce((acc, curr) => acc + curr);
// console.log(val);

// function maxSubArray(arr) {
//   let len = arr.length;
//   let ans = ;
//   let max = 0
//   for (let s = 0; s < len; s++) {
//     for (let e = s; e < len; e++) {
//       let subarr = ;
//       let sum = 0;
//       for (let k = s; k <= e; k++) {
//         subarr.push(arr[k]);
//         sum += arr[k];
//       }
//       if(max < sum){
//          ans = subarr;
//          max = sum;
//       }
//     }
//   }
//   return ans;
// }


// function curry2(y, x) {
//     // Write your solution here ========================
//     let product = 1;
//     if(x == null) //when only one param is passed, other is undefined/null
//     {
//         product = y; ///setting one parameter in member variable to be accessible in the child's closure.
//         return function(x){ //child function
//             return product * x; //we take one param from closure and other is available
//         }
//     }
//     else { //when both params are passed
//         return y * x;
//     }
    
// }
// console.log("curry2 : ",curry2(4)(2));
// ===========================================================================
// let a;
// console.log(a);
// function B() {
//   let a;
//   console.log(a);
//   function E() {
//     a = 6;
//     console.log(a);
//   }
//   a = 2;
//   E();
//   console.log(a);
// }
// a = 3;
// B();
// ===========================================================================
// let newObj = Object.create(null);
// newObj.newProp = "Hello";
// console.log(newObj);
// /*******
//  * 
//  * creating an object from another object
//  * ***/

// let obj2 = Object.create(newObj);
// obj2.name = "cap";
// // console.log("obj2", obj2);


// let obj3 = Object.create(obj2);

// obj3.name = "Loki";
// obj3.lastName = "Hemsworth";
// console.log("126 name", obj3);
// console.log("127 lastName", obj3.lastName);
// console.log("128 newProp", obj3.newProp)
// console.log("129 lastName", newObj.lastName);

// // loop an object carefully 
// // for (let key in obj3) {
// //     let res = Object.prototype.hasOwnProperty.call(obj3, key);
// //     if (res) {
// //         console.log(key + " : " + obj3[key]);
// //     }
// // }
// ===========================================================================
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHI() {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }
// }

// class SuperHuman extends Person {
//     constructor(name, age) {
//         // it call's constructor of the parent 
//         super(name, age)
//     }
//     sayHI() {
//         console.log(`I am super Human and ${this.name} years old`);
//     }
// }

// const superOne = new SuperHuman("Jasbir",25);
// console.log(superOne);
// superOne.sayHI();
// ===========================================================================
// function isInstanceOf(value, classOrSuperclass) {
//     if (value === null || value === undefined) {
//         return false;
//     }

//     // Get the prototype of the object
//     const prototype = Object.getPrototypeOf(value);
    
//     // Check if the prototype is null, which means we’ve reached the end of the prototype chain
//     if (prototype === null) {
//         return false;
//     }
//     console.log(" prototype : ",prototype.constructor, classOrSuperclass)
//     // Check if the prototype’s constructor matches the given class or superclass
//     if (prototype.constructor === classOrSuperclass) {
//         return true;
//     }

//     // Recursively check the prototype chain
//     return isInstanceOf(prototype, classOrSuperclass);
// }
// console.log(isInstanceOf(new SuperHuman(),Person));
// ===========================================================================
// function myObjectCreate(proto) {
//     // Write the solution here ==================================
//     if(!proto || typeof proto !== 'object') throw new Error();
//     let obj = {};
//     obj.proto = proto;
//     return obj;
// }

// // Step 1: Define a prototype object
// const personPrototype = {
//     greet: function() {
//       console.log("Hello, my name is " + this.name + ".");
//     }
//   };
  
//   // Step 2: Call myObjectCreate and pass the prototype object
//   const person = myObjectCreate(personPrototype);
  
  // Step 3: Assign the returned object to a variable
  
  // Step 4: Use the newly created object
//   person.name = "John";
//   person.greet(); // Output: Hello, my name is John.
// ===========================================================================
//   function myObjectCreate(proto) {
//     // Check if proto is a valid object
//     if (proto === null || typeof proto !== 'object') {
//         throw new Error('Invalid prototype object');
//     }

//     // Create a new object that inherits from the proto object
//     function F() {}
//     F.prototype = proto;
//     const newObj = new F();

//     return newObj;
// }

// // Example usage:
// const personPrototype = {
//     greet: function () {
//         console.log("Hello, my name is " + this.name + ".");
//     }
// };

// const person = myObjectCreate(personPrototype);
// person.name = "John";
// person.greet(); // Output: Hello, my name is John.
// ===========================================================================
// const obj = {
//     _value: 0,
//     get value() {
//         console.log("Getting the value");
//         return this._value;
//     },
//     set value(newValue) {
//         console.log("Setting the value");
//         this._value = newValue;
//     }
// };

// console.log(obj.value); // Calls the getter and logs "Getting the value", then prlets the value
// obj.value = 42; // Calls the setter and logs "Setting the value"
// console.log(obj._value); // Prlets the updated value
// console.log(obj.value); 

// ===========================================================================
// ===========================================================================
// ===========================================================================
// var longestPalindrome = function (words) {
//     let obj1 = {};
//     let obj2 = {};
//     let ansarr = ;
//     let acc = false;
//     for (const element of words) {
//       obj1[element] = (obj1[element] ?? 0) + 1;
//     }
//   console.log(obj1)

//     for (const element of words) {
//       let temparr = element.split("");
//       let first = temparr[0];
//       let check = temparr.every((e) => e == first);
//       if (check && obj1[element] > 1) {
//         let k = parselet(obj1[element] / 2);
//         obj2[element] = (obj2[element] ?? 0) + k;
//         obj1[element] = obj1[element] - k;
//       }
//       if (check && !acc) {
//         obj2[element] = (obj2[element] ?? 0) + 1;
//         acc=true;
//       } else if (!check) {
//         obj2[element] = (obj2[element] ?? 0) + 1;
//       }
//     }
//     console.log("obj2", obj2);
//     for (const element of words) {
//       let temparr = element.split("");
//       let s = 0,
//       e = temparr.length - 1;
//       while (s < e) {
//         let temp = temparr[s];
//         temparr[s] = temparr[e];
//         temparr[e] = temp;
//         s++;
//         e--;
//       }
//       temparr = temparr.join("");
//       if (obj2[temparr] > 0) {
//         obj2[temparr]--;
//         ansarr.push(element);
//       }
//     }
//     return ansarr.join("").length;
//   };
  // function longestPalindrome(words) {
  //   let ans = 0;
  //   let count = 
  //   for (const word of words) {
  //     const i = word[0].charCodeAt(0)- 'a'.charCodeAt(0);
  //     const j = word[1].charCodeAt(0) - 'a'.charCodeAt(0);
  //     if (count[j][i]) {
  //       ans += 4;
  //       --count[j][i];
  //     } else {
  //       ++count[i][j];
  //     }
  //   }

  //   for (let i = 0; i < 26; ++i)
  //     if (count[i][i])
  //       return ans + 2;

  //   return ans;
  // }
  // let inp = ["ll","lb","bb","bx","xx","lx","xx","lx","ll","xb","bx","lb","bb","lb","bl","bb","bx","xl","lb","xx"]
  // console.log("longestPalindrome ", longestPalindrome(inp));
  // console.log("longestPalindrome ", longestPalindrome(["lc", "cl", "gg"]));
  // console.log(
  //   "longestPalindrome ",
  //   longestPalindrome([
  //     "dd",
  //     "aa",
  //     "bb",
  //     "dd",
  //     "aa",
  //     "dd",
  //     "bb",
  //     "dd",
  //     "aa",
  //     "cc",
  //     "bb",
  //     "cc",
  //     "dd",
  //     "cc",
  //   ])
  // );
  // console.log(
  //   "longestPalindrome ",
  //   longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab", "uu"])
  // );

//   var countBits = function(n) {
//     if(n == 0) return [0];
//     let ans = [0,1];
//     if(n == 1) return ans;
//     for(let i=2;i<=n;i++){
//         let k = i;
//         let c = 0
//         while(k>0){
//             let rem = k%2;
//             if(rem == 1) c++
//             k = Math.floor(k/2);
//         }
//         ans.push(c)
//     }
//     return ans;
// };
// console.log("count bits ",countBits(5))

// function solve(a,b,c,d) {
//   //brute force 3 nested loops
//   // efficient is to calculate left max and right max for every element

//   let n = a.length;
//   let l = [];
//   l[0] = b*a[0];
//   for(let i=1;i<n;i++){
//       l[i] = Math.max(l[i-1],b*a[i]);
//   }

//   let r = [];
//   r[n-1] = d*a[n-1];
//   for(let i=n-2;i>=0;i--){
//       r[i]  = Math.max(r[i+1],d*a[i]);
//   }

//   let m = [];
//   let ans = 0;
//   for(let i=0;i<n;i++){
//       ans = Math.max(ans, l[i]+r[i]+c*a[i]);
//   }
//   return ans;
// }
// console.log("solve :",solve([1,5,-3,4,-2],2,1,-1))

// function maxSubArray(arr) {
//   let maxEndingHere = arr[0];
//   let maxSoFar = arr[0];
//   let start = 0;
//   let end = 0;
//   let tempStart = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxEndingHere * arr[i]) {
//       maxEndingHere = arr[i];
//       tempStart = i;
//     } else {
//       maxEndingHere = maxEndingHere * arr[i];
//     }

//     if (maxEndingHere > maxSoFar) {
//       maxSoFar = maxEndingHere;
//       start = tempStart;
//       end = i;
//     }
//   }

//   return arr.slice(start, end + 1);
// }

// console.log(maxSubArray([0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0]));
// console.log(maxSubArray([-3, 0, -5, 0]));
// console.log(maxSubArray([1, 2, -2, -3, 1]));


// function maxProductSubarray(nums) {
//   if (nums.length === 0) {
//       return 0;
//   }

//   let maxProduct = nums[0];
//   let minProduct = nums[0];
//   let result = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] < 0) {
//           // Swap max and min products when encountering a negative number
//           [maxProduct, minProduct] = [minProduct, maxProduct];
//       }

//       maxProduct = Math.max(nums[i], maxProduct * nums[i]);
//       minProduct = Math.min(nums[i], minProduct * nums[i]);

//       result = Math.max(result, maxProduct);
//   }

//   return result;
// }

// // Example usage:
// const input1 = [4, 2, -5, 1];
// const input2 = [-3, 0, -5, 0];

// console.log(maxProductSubarray(input1)); // Output: 8
// console.log(maxProductSubarray(input2)); // Output: 0

// console.log(maxProductSubarray([0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,-2,0,0,0,0,0,-2,0,0,0,0,0,0,0,0,0,-3,2,-3,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,0,0,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,-2,0,0,0,-3,-2,0,0,2,0,2,0,0,0,0,-1,0,0,0,-3,0,0,0,0,0,0,-3,0,0,0,0,0,0,0,2,0,-1,0,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,-1,0,0,0,-2,2,0,0,-2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-3,-1,0,0,0,0,1,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,-2,0,0,-1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,-1,0,0,-3,0,-2,0,-1,0,0,0,0,-1,0,0,0,-1,0,0,0,-2,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-3,0,0,0,0,2,1,0,0,-2,0,0,0,0,0,0,2,0,-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-3,0,0,0,0,0,0,0,0,0,0,0,0,-3,0,0,0,0,0]));
// console.log(maxProductSubarray([-3,0,  -5, 0]));
// console.log(maxProductSubarray([1, 2, -2, -3, 1]));

// var romanToInt = function(s) {
//   // let values = {I:1,V:5,X :10,L:50,C:100,D:500,M:1000};
//   // let sum = 0;
//   // for(let i=s.length-1;i>=0;i--){
//   //     if(values[s[i]] < values[s[i-1]]){
//   //       sum -= values[s[i]];}
//   //     else sum += values[s[i]];
//   // }
//   // return sum;
//   let map = {"M":1000,"D":500,"C":100,"L":50,"X":10,"V":5,"I":1}
//   let result = 0
//   for(let i=0;i<s.length;i++){
//       if(map[s[i]]<map[s[i+1]]){
//           result = result + (map[s[i+1]]-map[s[i]])
//           i++
//       } else{
//           result = result+map[s[i]]
//       }
//   }
//   return result
// };
// console.log("romanToInt : ",romanToInt('MCMXCIV'))
// console.log("romanToInt : ",romanToInt('III'))
// console.log("romanToInt : ",romanToInt('LVIII'))

var sequentialDigits = function (low, high) {
  let res = [];
  let last = 0;
  let len = String(low).length;
  let p = Number(String(low)[0]);
  let first = "";
  let addVal = "";
  for (let i = 0; i < len; i++) {
    first += p + i;
    addVal += "1";
  }
  last = Number(first);
  if(low <= last && last <= high) res.push(last);
  while (last <= high) {
    last = Number(addVal) + Number(last);
    if (String(last).length > len || String(last)[String(last).length - 1] == "0") {
      len++;
      if(len == 10) break;
      console.log(len)
      addVal = "";
      last = "";
      for (let k = 1; k <= len; k++) {
        last += k;
        addVal += 1;
      }
      last = Number(last);
      res.push(last);
    } else if(last <= high) {
      res.push(last);
    }
  }
  return res;
};
console.log(10, 1000000,sequentialDigits(58, 155));
console.log(100, 300, sequentialDigits(100, 300));
console.log(100, 1000 ,sequentialDigits(100, 1000));
console.log(300, 1000000,sequentialDigits(300, 1000000));

