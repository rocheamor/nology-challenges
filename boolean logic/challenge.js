2 == '2'; // true, not strict equality, not data type sensitive
2 === 2; // true
2 === '2'; // false, strict equality, data type sensitive
'2' + 3 == 23; //true, string concatenation
'2' + 3 === 5; // false, would return 23, string concatenation
10 % 3; // 1 = true (truthy) , would return 1 (remainder)
10 % 3 === 1; // true
(100 % 7) % 5; // 2 = true (truthy), would return true
(100 % 7) % 5 !== 0; //true
(100 % 7) % 9 == 2; // true, the result of firts expression is 2, and then 2 % 9 is 2 so 2==2
!(10 % 2); // true (!0) and 0 is a falsey value
!!!!((10 % 7) % 3); // false (3 % 3 = 0 = false)
10 % 3 === -1 % 2; // false (1 === -1)
(892783 != '89278' + 3) == 0; // true ((892783 != '892783') = false == 0)
true && false; // false ( needs for both expression to be true to return true)
false || true; // true (OR logical expression only needs one side of the equation to return true for it to be true)
true || false; // true (same explanation as above)
true || false; // true (same explanation as above)
true || false + true; // true (would return 2 which is truthy)
true * false && false + true; // false (true * false = 0 && false + true = 1 so 0 && 1 = false)
10 && 123 && -1 && 3; // true (10 && 123 = 123 && -1 = -1 && 3 = 3 (truthy value)) = all truthy value evaluates to the most right-hand side value
10 && 123 && 0 && 3; // false (10 && 123 = 123 && 0 = false && 3 = false) falsey value
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; // (10 && 123) = 123 && parseInt('Roisin') = 123 || 23/22 = 1 = 123 (true) *** 0 false
3 && 'Calum' && ('' || 26); // 3 && 26 = 26 true == calum && *** 26 true
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')); // CatDog (truthy)... all truthy values get the most right hand side