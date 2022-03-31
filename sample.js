//enum
var Type;
(function (Type) {
    Type[Type["admin"] = 2] = "admin";
    Type[Type["user"] = 3] = "user";
    Type[Type["student"] = 4] = "student";
})(Type || (Type = {}));
;
var checkEnum = function () {
    console.log(Type.admin);
};
//object
var obj = {
    name: "divyank",
    middlename: "santosh",
    grade: [2, 'A'] //tuple
};
// obj.grade.push(true); cant assign boolean
obj.grade.push(10);
obj.name = "";
console.log(obj.name + obj.grade[1] + obj.grade[0]);
console.log(obj);
console.log(obj.grade[2]);
var expre = function (n1, n2) {
    return n1 + n2;
};
function add1(n1, n2, typeO) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (typeO === 'any-number')
        return +result;
    else {
        return result.toString();
    }
}
console.log(add1(10, 15, 'any-number'));
console.log(expre(10, 15));
checkEnum();
