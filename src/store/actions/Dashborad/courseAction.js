import axios from 'axios';

export const add_course = (data) => async (dispatch) => {

    dispatch({ type: 'SET_LODER' })
    try {
        const response = await axios.post('http://localhost:4000/rest-api/add-course', data, { withCredentials: true })
        dispatch({
            type: "COURSE_ADD_SUCCESS",
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type: "COURSE_ADD_FAIL",
            payload: {
                error: error.response.data.errorMessage
            }
        })
    }
}
export const get_all_category = (page, searchValue) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:4000/rest-api/get-course?page=${page}&&searchValue=${searchValue}`, { withCredentials: true })
        dispatch({
            type: "DASHBORAD_COURSE_GET_SUCCESS",
            payload: {
                allCourse: response.data.allCourse,
                perPage: response.data.perPage,
                courseCount: response.data.courseCount
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const delete_course = (id) => async (dispatch) => {

    try {
        const response = await axios.delete(`http://localhost:4000/rest-api/delete-course/${id}`, { withCredentials: true })
        dispatch({
            type: "COURSE_DELETE_SUCCESS",
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        console.log(error.response);
    }
}
export const edit_category = (courseSulg) => async (dispatch) => {
   
    try {
        const response = await axios.get(`http://localhost:4000/rest-api/edit-course/${courseSulg}`, 
        { withCredentials: true })
        dispatch({
            type : 'EDIT_COURSE_GET_SUCCESS',
            payload : {
                editCourse : response.data.editCourse
            }
        });
        dispatch({
            type : 'EDIT_REQUEST_SET'
        })
    } catch (error) {
        console.log(error.response);
    }
}
export const updated_course = (id,data) => async (dispatch) => {

    try {
        const response = await axios.patch(`http://localhost:4000/rest-api/update-course/${id}`, data,
        { withCredentials: true })
      
        dispatch({
            type: "COURSE_UPDATED_SUCCESS",
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type: "COURSE_UPDATED_FAIL",
            payload: {
                error: error.response.data.errorMessage
            }
        })
    }
}

