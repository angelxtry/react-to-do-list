const ADD_CATEGORY = "todo/ADD_CATEGORY";
const DEL_CATEGORY = "todo/DEL_CATEGORY";
const CHANGE_CATEGORY_TEXT = "todo/CHANGE_CATEGORY_TEXT";
const SELECT_CATEGORY = "todo/SELECT_CATEGORY";
const ADD_TODO = "todo/ADD_TODO";
const DEL_TODO = "todo/DEL_TODO";
const CHANGE_TODO_TEXT = "todo/CHANGE_TODO_TEXT";
const TOGGLE_COMPLETE = "todo/TOGGLE_COMPLETE";
const SEARCH_CATEGORY_AND_TODO = "todo/SEARCH_CATEGORY_AND_TODO";

export const addCategory = id => ({
  type: ADD_CATEGORY,
  id,
  name: "새로운 목록"
});

export const delCategory = id => ({
  type: DEL_CATEGORY,
  id
});

export const changeCategoryText = (id, text) => ({
  type: CHANGE_CATEGORY_TEXT,
  id,
  text
});

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  id
});

export const addTodo = (categoryId, id) => ({
  type: ADD_TODO,
  categoryId,
  id
});

export const delTodo = (categoryId, id) => ({
  type: DEL_TODO,
  categoryId,
  id
});

export const changeTodoText = (categoryId, id, text) => ({
  type: CHANGE_TODO_TEXT,
  categoryId,
  id,
  text
});

export const toggleComplete = (categoryId, id) => ({
  type: TOGGLE_COMPLETE,
  categoryId,
  id
});

export const searchCategoryAndTodo = searchText => ({
  type: SEARCH_CATEGORY_AND_TODO,
  searchText
});

const initialState = {
  searchText: "",
  selectedCategoryId: "00001",
  searchResults: [],
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
          categoryId: "00002",
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
      // console.log(state.categories);
      // console.log(action);
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
        categories: state.categories.filter(
          category => category.id !== action.id
        )
      };
    case CHANGE_CATEGORY_TEXT:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.id) {
            category.name = action.text;
          }
          return category;
        })
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
      const newCategories = state.categories.map(category => {
        if (category.id !== action.categoryId) {
          return category;
        }
        category.todos = category.todos.concat({
          categoryId: action.categoryId,
          id: action.id,
          name: ""
        });
        return category;
      });
      return {
        ...state,
        categories: newCategories
      };
    }
    case DEL_TODO: {
      const newList = state.categories.map(category => {
        if (category.id === action.categoryId) {
          category.todos = category.todos.filter(todo => todo.id !== action.id);
        }
        return category;
      });
      return {
        ...state,
        categories: newList
      };
    }
    case CHANGE_TODO_TEXT: {
      const newList = state.categories.map(category => {
        if (category.id === action.categoryId) {
          category.todos = category.todos.map(todo => {
            if (todo.id === action.id) {
              todo.name = action.text;
            }
            return todo;
          });
        }
        return category;
      });
      return {
        ...state,
        categories: newList
      };
    }
    case TOGGLE_COMPLETE: {
      // console.log('Reducer-TOGGLE_COMPLETE before: ', state);
      const newList = state.categories.map(category => {
        if (category.id === action.categoryId) {
          category.todos = category.todos.map(todo => {
            if (todo.id === action.id) {
              todo.complete = !todo.complete;
            }
            return todo;
          });
        }
        return category;
      });
      // console.log('Reducer-TOGGLE_COMPLETE after: ', state);
      // console.log('Reducer-TOGGLE_COMPLETE newList: ', newList);
      return {
        ...state,
        categories: newList
      };
    }
    case SEARCH_CATEGORY_AND_TODO: {
      const newCategories = [];
      state.categories.forEach(category => {
        if (category.name.includes(action.searchText)) {
          newCategories.push(category);
        } else {
          const newTodos = category.todos.filter(todo =>
            todo.name.includes(action.searchText)
          );
          console.log('SEARCH_CATEGORY_AND_TODO newTodos: ', newTodos);
          if (newTodos.length >= 1) {
            newCategories.push({
              id: category.id,
              name: category.name,
              todos: newTodos
            });
          }
        }
      });
      return {
        ...state,
        searchText: action.searchText,
        searchResults: newCategories
      };
    }
    default:
      return state;
  }
};

export default todoList;
