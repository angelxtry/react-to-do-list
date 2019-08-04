// action
// add category
// delete category
// add todo
// delete todo
// toggle complete
const ADD_CATEGORY = "todo/ADD_CATEGORY";
const DEL_CATEGORY = "todo/DEL_CATEGORY";
const SELECT_CATEGORY = "todo/SELECT_CATEGORY";
const ADD_TODO = "todo/ADD_TODO";
const DEL_TODO = "todo/DEL_TODO";
const TOGGLE_COMPLETE = "todo/TOGGLE_COMPLETE";

export const addCategory = id => ({
  type: ADD_CATEGORY,
  id,
  name: "새로운 목록"
});

export const delCategory = id => ({
  type: DEL_CATEGORY,
  id
});

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  id
});

export const addTodo = (categoryId, id, name) => ({
  type: ADD_TODO,
  categoryId,
  id,
  name
});

export const delTodo = (categoryId, id) => ({
  type: DEL_TODO,
  categoryId,
  id
});

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  id
});

// data
// [{
//   id key
//   name
//   todos [{
//     id key
//     name
//     complete
//   }]
// }]

const initialState = {
  selectedCategoryId: "00001",
  categories: [
    {
      id: "00001",
      name: "미리알림",
      todos: [
        {
          categoryId: "00001",
          id: "10001",
          name: "category1-todo1",
          complete: false
        },
        {
          categoryId: "00001",
          id: "10002",
          name: "category1-todo2",
          complete: false
        },
        {
          categoryId: "00001",
          id: "10003",
          name: "category1-todo3",
          complete: false
        }
      ]
    },
    {
      id: "00002",
      name: "category2",
      todos: [
        {
          categoryId: "00002",
          id: "20001",
          name: "category2-todo1",
          complete: false
        },
        {
          categoryId: "00001",
          id: "20002",
          name: "category2-todo2",
          complete: false
        }
      ]
    },
    {
      id: "00003",
      name: "category3",
      todos: [
        {
          categoryId: "00003",
          id: "30001",
          name: "category3-todo1",
          complete: false
        }
      ]
    }
  ]
};
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      console.log(state.categories);
      console.log(action);
      return {
        ...state,
        categories: state.categories.concat({
          id: action.id,
          name: action.name,
          todos: []
        })
      };
    }
    case DEL_CATEGORY:
      return {
        ...state,
        state: state.categories.filter(category => category.id !== action.id)
      };
    case SELECT_CATEGORY: {
      // console.log('Reducer-SELECT_CATEGORY: ', state);
      // console.log('Reducer-SELECT_CATEGORY: ', action);
      // console.log('Reducer-SELECT_CATEGORY: ', {...state.categories});
      return {
        selectedCategoryId: action.id,
        categories: [...state.categories]
      };
    }
    case ADD_TODO: {
      const newList = state.categories.map(category => {
        if (category.id !== action.categoryId) {
          return category;
        }
        category.todos = category.todos.concat({
          categoryId: action.categoryId,
          id: action.id,
          name: action.name
        });
        return category;
      });
      return {
        ...state,
        state: newList
      };
    }
    case DEL_TODO: {
      const newList = state.categories.map(category => {
        if (category.id !== action.categoryId) {
          return category;
        }
        category.todos = category.todos.filter(todo => todo.id !== action.id);
        return category;
      });
      return {
        ...state,
        state: newList
      };
    }
    case TOGGLE_COMPLETE: {
      const newList = state.categories.map(category => {
        return category.todos.map(todo => {
          if (todo.id === action.id) {
            todo.complete = !todo.complete;
          }
          return todo;
        });
      });
      return {
        ...state,
        categories: newList
      };
    }
    default:
      return state;
  }
};

export default todoList;
