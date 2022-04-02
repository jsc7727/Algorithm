
# Redux

# ⭐️ Redux를 사용하는 이유가 무엇인가요?
전역 상태관리를 위해 사용합니다.
context api
mobx 등 대체 할 수 있는 방법도 있습니다.

# ⭐️ Redux의 장단점에 대해 설명해주세요.
redux를 사용하면 코드가 길어집니다.
가독성이 떨어지고 작업량이 늘어납니다.
redux를 사용하면 전역 상태 예를 들어 로그인 등 상태 관리하기 편합니다.

# ⭐️ Context API와 Redux를 비교해주세요.
context api는 react에서 자체적으로 지원하는 전역 상태 관리 함수 입니다.
redux는 react에서 뿐만 아니라 바닐라 js에서도 사용이 가능한 라이브러리 입니다.

# Redux-saga에 대해 설명해주세요.
redux에서 비동기 처리를 하기 위해 나왔습니다.
1. 비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있다.
2. 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있다.
3. 웹소켓을 사용하는 경우 channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있다.
4. api 요청이 실패했을 때 재요청하는 작업을 할 수 있다.
generator 문법을 사용하는데 진입장벽이 크다.
ex) yield함수

# Generator 문법에 대해 설명해주세요.
함수를 실행하다가 잠깐 멈췄다가 다시 작동하게 하는것 
반환값이 여러개 나올 수 있음.
```js
function* generatorFunction() {
    console.log('안녕하세요?');
    yield 1;
    console.log('제너레이터 함수');
    yield 2;
    console.log('function*');
    yield 3;
    return 4;
}
```
    // 출력
    a = generatorFunction()
    generatorFunction {<suspended>}
    a.next()
    VM70:2 안녕하세요?
    {value: 1, done: false}
    a.next()
    VM70:4 제너레이터 함수
    {value: 2, done: false}
    a.next()
    VM70:6 function*
    {value: 3, done: false}
    a.next()
    {value: 4, done: true}
    a.next()
    {value: undefined, done: true}
    a.next()
    {value: undefined, done: true}

# Redux-saga, Redux-Thunk의 차이에 대해 설명해주세요.
