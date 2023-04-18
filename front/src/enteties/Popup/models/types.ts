import { FeedbackPopup } from "widgets/FeedbackPopup/FeedbackPopup";
import { SuccessSendPopup } from "widgets/SuccessSendPopup/SuccessSendPopup";



export const enum PopupList {
    MESSAGE='message',
    FEEDBACK='feedback'
}


export const PopupsBody = {
    [PopupList.MESSAGE]: SuccessSendPopup,
    [PopupList.FEEDBACK]: FeedbackPopup
}

export interface PopupProps {
    name: PopupList;
}


export interface PopupState {
    popups: PopupProps[];
    activePopup: PopupList | null;
}