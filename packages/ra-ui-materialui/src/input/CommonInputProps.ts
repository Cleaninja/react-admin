import { InputProps } from 'ra-core';

export type CommonInputProps<ValueType = any> = InputProps<ValueType> & {
    cellClassName?: string;
    /*
     * @deprecated this property is not used anymore
     */
    formClassName?: string;
    fullWidth?: boolean;
    headerCellClassName?: string;
    margin?: 'none' | 'dense' | 'normal';
    variant?: 'standard' | 'outlined' | 'filled';
};
