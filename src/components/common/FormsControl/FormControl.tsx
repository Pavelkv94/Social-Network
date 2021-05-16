import React from 'react';
import style from './FormControl.module.css';

const FormControl = ({ input, meta, child, ...props }: any) => {
    const validationError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (validationError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {validationError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
};

//todo то же что и выше но попроще
// export const Textarea = ({ input, meta, ...props }: any) => {
//     const validationError = meta.touched && meta.error;
//     return (
//         <div className={style.formControl + " " + (validationError ? style.error : "")}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {validationError && <span>{meta.error}</span>}
//         </div>
//     )
// };

// export const Input = ({ input, meta, ...props }: any) => {
//     const validationError = meta.touched && meta.error;
//     return (
//         <div className={style.formControl + " " + (validationError ? style.error : "")}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             {validationError && <span>{meta.error}</span>}
//         </div>
//     )
// };