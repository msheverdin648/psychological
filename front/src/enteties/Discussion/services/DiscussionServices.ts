import { AppDispatch } from "app/store/store"
import { DiscussionSlice } from "../redux/DiscussionSlice"


export const createAppointment = (data: any) => async (dispatch: AppDispatch) =>  {
    console.log(123)
    try {
        dispatch(DiscussionSlice.actions.setDataFromForm(data))
        // dispatch(DiscussionSlice.actions.sendAppointment())
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}