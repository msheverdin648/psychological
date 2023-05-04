import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PopupWrapper.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { PopupList, PopupSlice, PopupsBody } from 'enteties/Popup';
import { useEffect, useState } from 'react';
import { PopupBody } from '../PopupBody/PopupBody';

interface PopupWrapperProps {
className?: string;
// children: any;
}

export const PopupWrapper: React.FC<PopupWrapperProps> = (props) => {
    const { className } = props;


    const dispatch = useAppDispatch()
    const { activePopup } = useAppSelector(state => state.PopupReduser)

    function clickWrapperHandler(e: any){
        e.stopPropagation()
        dispatch(PopupSlice.actions.closePopup())
    }

    useEffect(()=>{
        if(activePopup){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    }, [activePopup])

    return (
        <div className={classNames(cls.popupWrapper, {[cls.open]: activePopup !== null}, [className ?? '' ])} onClick={e => clickWrapperHandler(e)}>
            <div className={cls.board} onClick={e => e.stopPropagation()}>
                <span className={cls.cross} onClick={()=>dispatch(PopupSlice.actions.closePopup())}>&times;</span>
                <PopupBody/>
            </div>
        </div>
    );
}