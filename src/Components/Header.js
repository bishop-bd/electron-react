import React from 'react';

export default function Header (){
    return (
        <h1 onClick={ () => {
            electron.notificationApi.sendNotification('Test')
        }}>Hello Universe</h1>
    )
}