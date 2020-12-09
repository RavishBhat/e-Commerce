export interface IProduct {
    name: string;
    definitionUrl: string;
}

export interface IProductField {
    caption: string;
    type: string;
    mandatory: boolean;
    defaultValue: string;
    validationMessage: string;
}