
// 1. https://ko.javascript.info/task/rewrite-function-question-or
// '?'나 '||'를 사용하여 함수 다시 작성하기
// 중요도: 4 

// 아래 함수는 매개변수 age가 18보다 큰 경우 true를 반환합니다.
// 그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후, 해당 결과를 반환합니다.

//  function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('보호자의 동의를 받으셨나요?');
//     }
//   }

// if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.

// 아래 조건을 충족하는 해답 2개를 작성해야 합니다.

// 1.물음표 연산자 ?를 사용하여 본문을 작성
// 2.OR 연산자 ||를 사용하여 본문을 작성

/* 1. ? 연산자를 이용 */
function checkAge1(age){
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

/* 2. || 연산자를 이용 */
function checkAge2(age){
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}