import React from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { Field } from "redux-form"
import style from './FormControl.module.css';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
};

const FormControl: React.FC<FormControlPropsType> = ({ meta, children }) => {
    const validationError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (validationError ? style.error : "")}>
            <div>
                {children}
            </div>
            {validationError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: WrappedFieldProps) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: WrappedFieldProps) => {
    const { input, meta, ...restProps } = props;
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


export const CreateField = (placeholder: string | null, name: string, validators: any, component: any, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)

export type GetStringKeys<T> = Extract<keyof T, string>