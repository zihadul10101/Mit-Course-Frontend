const courseState = {
    loader: false,
    courseError: '',
    courseSuccess: '',
    allCourse: [],
    perPage: 0,
    courseCount: 0,
    editCourse: '',
    editRequest: false
}

export const dashboradCourseReducer = (state = courseState, action) => {
    const { type, payload } = action;
    if (type === 'SET_LODER') {
        return {
            ...state,
            loader: true
        }
    }
    if (type === 'COURSE_ADD_SUCCESS' || type === 'COURSE_DELETE_SUCCESS' || type === 'COURSE_UPDATED_SUCCESS') {
        return {
            ...state,
            loader: false,
            courseSuccess: payload.successMessage,
            courseError: '',
        }
    }
    if (type === 'DASHBORAD_COURSE_GET_SUCCESS') {
        return {
            ...state,
            loader: false,
            allCourse: payload.allCourse,
            perPage: payload.perPage,
            courseCount: payload.courseCount
        }
    }
    if (type === 'EDIT_COURSE_GET_SUCCESS') {
        return {
            ...state,
            editCourse: payload.editCourse,
        }
    }
    if (type === 'EDIT_REQUEST_SET') {
        return {
            ...state,
            editRequest: true,
        }
    }
    if (type === 'COURSE_SUCCESS_MESSAGE') {
        return {
            ...state,
            courseSuccess: '',

        }
    }
    if (type === 'EDIT_REQUEST_CLEAR') {
        return {
            ...state,
            editRequest: false

        }
    }
    if (type === 'COURSE_ERROR_MESSAGE') {
        return {
            ...state,
            courseError: ''

        }
    }
    if (type === 'COURSE_ADD_FAIL' || type === 'COURSE_UPDATED_FAIL') {
        return {
            ...state,
            loader: false,
            courseError: payload.error,
            courseSuccess: ''
        }
    }

    return state;
}