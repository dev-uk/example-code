
//1.https://ko.javascript.info/task/hello-object

// 객체야 안녕?
// 중요도: 5
// 코드 한 줄로 아래 문제를 각각 풀어보세요.

// 빈 객체 user를 만듭니다.
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// name의 값을 Pete로 수정해보세요.
// user에서 프로퍼티 name을 삭제하세요.

function object1(){

    let user = {};
    
    user.name = "John";

    console.log(user);
    user.surname = "Smith";

    user.name = "Pete";

    delete user.name;
    
    console.log(user);
}

//2.https://ko.javascript.info/task/is-empty

// 객체가 비어있는지 확인하기
// 중요도: 5
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

// 아래와 같이 동작해야 합니다.

// ======================================================
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// ======================================================

function isEmpty(obj){

    for(let key in obj){
        return false;
    }

    return true;
}

// 3. https://ko.javascript.info/task/sum-object

// 프로퍼티 합계 구하기
// 중요도: 5
// 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

// ======================================================
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// ======================================================

// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

// 주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.

function propSum(obj){

    let sum = 0;

    for(let key in obj){
        sum += obj[key];
    }

  return sum;
}


// 4.https://ko.javascript.info/task/multiply-numeric

// 프로퍼티 값 두 배로 부풀리기
// 중요도: 3
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 예시:
// ======================================================
// // 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// ======================================================

// multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.

// 힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "number"){
           obj[key] *= 2; 
        }
    }
}