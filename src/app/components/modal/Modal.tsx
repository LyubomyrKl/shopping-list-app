import React from 'react';
import cn from "classnames";
import './Modal.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleActiveModal } from "../../slices/modalSlice";

// @ts-ignore
function Modal({children, modalClasses}) {

    const dispatch = useAppDispatch();
    const active = useAppSelector( state => state.modal.activePopup)
    const classes = cn('popup', {'active': active})

    const closeModalByPopup = (e:React.MouseEvent<Element, MouseEvent>) => {
        const target = e.target as Element;
        if(target.classList.contains('popup')){
            dispatch(toggleActiveModal())
        }
    }

    return (
        <div className={classes} onClick={(e) => closeModalByPopup(e)}>
            <div className={`modal ${modalClasses}`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;