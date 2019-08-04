# plan

## 기능

sidebar

v sidebar에 목록 추가 버튼 or 링크 추가
v 목록 추가를 누르면 sidebar에 목록이 생성
목록을 수정할 수 있다.
목록 추가를 누르면 생성된 항목에 포커스가 옮겨진다.
포커스가 옮겨지도 자동으로 이름 변경을 할 수 있게 된다.
목록을 클릭혀면 이름을 변경할 수 있다.

main

v 오른쪽 창을 main이라고 하자.
v 목록을 클릭하면 main의 제목과 할일이 변경된다.
v 할일은 앞에 체크박스가 있다.
v 할일 추가 버튼 추가
첫 라인을 클릭하면 할일을 입력할 수 있다.
입력 후 엔터를 치면 다름 라인으로 넘어간다.
여러 행이 있을 때 중간행을 지우면 위로 밀려 올라가는 이벤트
v 체크박스를 클릭하면 취소선

main 할일 추가 버튼

v 버튼을 클릭하면 할일 목록의 마지막에 input이 생성
v text가 비어있는 todo가 하나 생성되면서 input이 추가되는 것 처럼 보여진다.
v 비어 있는 input이 있다면 input이 추가로 생성되지 않는다.
v input에 값이 입력되고 enter가 입력되면 저장
v focus out되면 todo 저장 로직 추가

## components

1. sidebar
1.1 목록 추가 버튼
1.2 목록 리스트
2. main
 2.1 main title
 2.2 main list
 2.3 to do create button
 2.4 to do check box

## data

```json
categories: [{
  id: '',
  title: '',
  todos: [{
    id: '',
    title: '',
    complete: false // true or false
  }]
}]
```

## action

create category
add category
delete category
change category title

add todo
delete todo
toggle complete
