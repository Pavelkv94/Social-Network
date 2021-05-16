import React from 'react';
import style from './FormControl.module.css';

export const Textarea = ({ input, meta, ...props }: any) => {
    const validationError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (validationError ? style.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {validationError && <span>{meta.error}</span>}
        </div>
    )
};