import { UsersStateType } from "./usersReducer"

let state: UsersStateType

beforeEach(() => {
  state = {
    users: [],
    pageSize: 25,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  }
})

test('test addPost', () => {
  let action = addPostActionCreator('IT-KAMASUTRA.COM');
  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(5)
});
