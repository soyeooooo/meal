"use client";

import { useRef } from 'react';
import styles from './image_picker.module.css'

export default function IMAGEPicker({label, name}){
    const imageInput = useRef();
    
    function handlePickClick(){
        imageInput.current.click();
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <input 
                    className={styles.input} 
                    type='file' 
                    id={name} 
                    accept='image/png, image/jpg' 
                    name={name} 
                    ref={imageInput}
                />
                <button 
                    className={styles.button} 
                    type='button' 
                    onClick={handlePickClick}
                >
                    이미지 고르시죠
                </button>
            </div>
        </div>
    );
}
