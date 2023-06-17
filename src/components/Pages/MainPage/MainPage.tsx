import React from 'react';
import { Header } from '../../Header/Header';
import { SideBar, SideBarProps } from '../../SideBar/SideBar';

export const MainPage: React.VFC = ({lessonCardsList}: SideBarProps) => {
    return (
        <><Header /><SideBar lessonCardsList={lessonCardsList}/></>
        
    )
}