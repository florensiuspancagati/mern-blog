export const setForm = (formType, formValue) => {
    return {type:'SET_FORM_DATA', formType, formValue};
}

export const setImagePreview = (payload) => {
    return {type:'SET_IMAGE_PREVIEW', payload};
}