export type FieldValidatorType = (value: string) => string | undefined

export const requiredField: FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Field is required";
}

//todo для того чтобы мы могли адавать любую длину создаем валидатор криейтор
// export const maxLength30 = (value: any) => {
//     if (value && value.length > 30) return "Max length is 30 symbols";
//     return undefined;
// }
export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
