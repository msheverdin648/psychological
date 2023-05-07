import { PopupList, PopupsBody } from 'enteties/Popup';
import { useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';



export const PopupBody= (props: any) => {

    const { activePopup } = useAppSelector(state => state.PopupReduser)
    const SomePopup = activePopup !== null ? PopupsBody[activePopup] : null;
    return SomePopup ? <SomePopup {...props}/> : null;
}