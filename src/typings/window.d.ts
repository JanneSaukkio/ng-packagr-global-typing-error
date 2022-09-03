import { CustomProperty } from '../lib';

declare global {
    interface Window {
        customProperty?: CustomProperty;
    }
}

export {};
