React
# ⭐️ Virtual DOM 작동 원리에 대해 설명해주세요.
 "DOM을 추상화한 가상의 객체"

# ⭐️ Virtual DOM 이 무엇인지 설명해주세요.
실제 dom을 추상화해 놓은 것입니다.
virtual dom 변경 => virtual dom 이 실제 dom 변경


[Virtual Dom](https://jeong-pro.tistory.com/210)

# ⭐️ React를 사용하는 이유에 대해 말씀해주세요.
동적인 웹 페이지를 보다 효율적으로 유지 보수하고 관리할 수 있도록 하기 위함입니다. 
csr통해 백엔드 부하를 줄일 수 있다.

# 제어 컴포넌트와 비제어 컴포넌트의 차이에 대해 설명해주세요.
제어 컴포넌트는 react 컴포넌트에서 폼 데이터를 다룬다.
비제어 컴포넌트의 경우 useRef를 사용하여 dom을 직접 다루게 됩니다.

# key props를 사용하는 이유는 무엇인가요?
map에서 key를 사용하는 이유는 최적화 때문입니다.
key값이 바뀌면 값이 바뀐것으로 판정해 해당부분을 리렌더링 합니다.

# props와 state의 차이는 무엇인가요?
state는 상태를 나타내는 것이고 
props는 상위 컴포넌트에서 항위 컴포넌트로 값을 넘겨 줄때 사용하는 변수입니다.

# pure component에 대해 설명해주세요.
pure component란 class component에서 shouldComponentUpdate가 들어간 컴포넌트이다.
함수형으로는 memo 를 사용하면 되는데 메모이제이션을 활용했다.
memo는 메모이제이션 한 값을 반환. 함수를 실행한 결과를 반환.
useCallback은 메모이제이션 한 함수를 반환 함수 자체를 반환.

# shouldComponentUpdate에 대해 설명해주세요.
컴포넌트가 리렌더링 될때 작동하는 메소드, 리액트 생명주기 중 하나 이다.

# ⭐️ 클래스형 컴포넌트와 함수형 컴포넌트의 차이에 대해 설명해주세요.
클래스형 컴포넌트를 함수형으로 wrapper 한것
클래스의 내용 전부 함수형으로 사용 가능

# ⭐️ 생명 주기 메서드에 대해 설명해주세요.
컴포넌트가 생성될때
특정 state가 변경될 때
컴포넌트가 죽을때

# ⭐️ 리액트에서 JSX 문법이 어떻게 사용되나요?
JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공해 줍니다. 
클래스형 함수형 나누어져있음


# 왜 state를 직접 바꾸지 않고 useState를 사용해야 하나요?
리렌더링을 하는 기준을 state로 잡습니다.
그리고 state 값이 바뀌었다고 리렌더링 하는 것이 아닌
주소값이 바뀌어야지 리렌더링 합니다.

# ⭐️ useMemo와 useCallback에 대해 설명해주세요.
useMemo는 값을 저장합니다.(예를들자면 함수의 결과 값 저장)
useCallback을 함수를 저장합니다.(예를들자면 함수 자체)

# 리액트에서 메모이제이션을 어떤 방식으로 하나요?
useMemo useCallback을 사용합니다.

# 리액트 관련 패키지 중에 제일 좋다고 생각한 것은 무엇인가요?


# ⭐️ 리액트의 렌더링 성능 향상을 위해 어떻게 해야 하나요?
1. 번들사이즈 줄여야합니다.
2. useMemo useCallback 사용하기
3. react18 

# React-query에 대해 들어봤나요?
최근 프로젝트에서 사용해봤습니다.
게시판이 필요해서 만들었습니다.
처음에 redux를 사용해서 만들어보려고 했는데 상태 관리하는데 너무 많은 시간이 들것 같았습니다.
그래서 nextjs를 쓰고있어서 swr과 react-query 둘중에 고민했는데 react-query에서 너무 자신만만하게
react-query가 좋다고 하길래 사용해본 경험이있습니다.
직접만들면 상태관리하기 엄청 힘든데 덕분에 편했습니다.

# React 18 버전 업데이트 내용에 대해 말씀해주세요.
1. html streaming : suspense 태그를 이용해 로딩중일 때 fallback props 값을 대신 보여준다. (사용자 편의성)
2. selective hydrating (선택적 수화) : 기존의 탑-다운 방식의 렌더링이 아닌 빨리 렌더링 된 것 부터 보여줄 수 있다. 그렇기에 사이드 바의 경우 먼저 렌더링이 될 것이고 로딩중에도 페이지 이동 하기 좋을 것임.
3. state batch update : state 값이 여러개이며 값이 바뀔때 모아서 한번에 렌더링 == automatic batching [Transition](https://velog.io/@jay/React-18-%EB%B3%80%EA%B2%BD%EC%A0%90)을 사용해서 우선순위를 조절할 수 있음.
# useEffect와 useLayoutEffect의 차이점에 대해 말씀해주세요.
[useEffect와 useLayoutEffect의 차이점](https://merrily-code.tistory.com/46)
effect를 작동하는 시간의 차이가 있습니다. 
useLayoutEffect의 경우 dom을 업데이트하고 바로 작동하는 반면
useEffect의 경우 dom 업데이트 이후 브라우저 스크린에 뿌려준 후 effect가 작동합니다.
useEffect에 state값을 변경하는 경우 

# ⭐️ Context API에 대해 설명해주세요.
redux를 원래 많이 사용했는데 react자체적으로 전역상태관리를 하기위해서 나온 react 함수 입니다.
reducer를 사용하는부분이 redux와 비슷하여 적응하기 쉬웠던거 같습니다.

