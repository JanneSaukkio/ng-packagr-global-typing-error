export interface CustomProperty {
    param1: number;
    param2: string;
}

export function getCustomProperty(): CustomProperty | undefined {
    return window.customProperty;
}

export function setCustomProperty(value: CustomProperty) {
    window.customProperty = value;
}
