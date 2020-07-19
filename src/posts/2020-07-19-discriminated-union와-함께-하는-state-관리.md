---
templateKey: blog-post
title: Discriminated Union와 함께 하는 State 관리
date: 2020-07-19T14:25:18.411Z
thumbnail: /images/타입스크립트.png
---
REST API로 데이터를 불러와서 보여주는 React 컴포넌트 TypeScript로 작성한다고 가정해 봅시다.

아마도 가장 먼저, HTTP GET 요청을 하기 위해서 `fetch` API를 먼저 떠올릴 것입니다. 그리고 위해서 아래와 같이 `fetch` API가 작동하는 과정을 예상할 것입니다. 

* `fetch` API가 아직 실행 전일 
* 서버로부터 응답을 기다리는 중일 때
* 서버로부터 응답을 성공적으로 받았을 때
* 서버로부터 응답을 받는데 실패했을 때

컴포넌트는 각 과정별로 알맞은 모습으로 렌더될 수 있어야 합니다. 간단한 설명을 위해 `useReducer` Hook을 선택하겠습니다. 하지만 Redux를 사용한다 해도 개념과 코드는 거의 비슷합니다.

```typescript
interface State {
  isLoading: boolean;
  data: Data | null;
  error: Error | null;
}

interface LoadingAction {
  type: 'LOADING'; 
}

interface SuccessAction {
  type: 'SUCCESS';
  data: Data;
}

interface FailureAction {
  type: 'FAILURE';
  error: Error;
}

type Action = LoadingAction | SuccessAction | FailureAction;

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        isLoading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case 'FAILURE':
      return {
        isLoading: false,
        data: null,
        error: data.error,
      };
    default:
      return state;
  }
};

const initialState: State = {
  isLoading: false,
  data: null,
  error: null,
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      dispatch({ type: 'LOADING' });
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'FAILURE', error });
    }
    
  return (
    <button onClick={getData}>클릭해서 데이터 불러오기</button>
  );
};
```

\`App\`이라는 컴포넌

# State Machine으로 생각하기