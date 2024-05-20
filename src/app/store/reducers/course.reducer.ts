// // import the interface
import { CourseItem } from '../models/courseItem.model';
import { CourseAction, CourseActionType } from '../actions/course.action';
// //create a dummy initial state

const initialState: Array<CourseItem> = [
  {
    employeesid: '1',
    technicalskills: 'Java,Python',
     workexperience: '5',
  },
];

export function CourseReducer(
  state: Array<CourseItem> = initialState,
  action: CourseAction
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
