import React from 'react';
import { FormControl, InputLabel, Select, FormHelperText } from '@material-ui/core'

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => {
     return(
        <FormControl fullWidth error={touched && error}>
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <Select
                {...input}
                {...custom}
                value={input.value}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    )}

export default renderSelectField;