import React from "react";

export const items = [
    {
        number: '01.',
        text: 'Select the amount of heads you want to mint and the exact price will appear',
    },
    {
        number: '02.',
        text: 'Copy the address below and paste it into wallet ',
    },
    {
        number: '03.',
        text: 'Copy the ADA amount and paste it into wallet ',
    },
    {
        number: '04.',
        text: 'Send the transaction, your CNFT will appear in your Cardano wallet',
    },
];

export const iconCopy = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V10C16 8.897 15.103 8 14 8Z" fill="#EEEEEE"/>
    <path d="M20 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z" fill="#EEEEEE"/>
</svg>;

export const iconCheck = <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21.83L14.59 27.42L16 26L10.42 20.42L9 21.83ZM30.83 14L20.25 24.59L16.09 20.42L14.66 21.83L20.25 27.42L32.25 15.42L30.83 14ZM26.59 15.42L25.18 14L18.83 20.35L20.25 21.76L26.59 15.42Z" fill="white"/>
</svg>


export const note = 'Please ensure you are ONLY sending ADA from a Cardano wallet such as: Yoroi, Daedalus, Adalite & Nami. DO NOT send ADA from an exchange, you may lose your funds and will not receive your NFT.';