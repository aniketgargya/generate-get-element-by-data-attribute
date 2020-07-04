export const generateGetElementByDataAttribute = (dataAttribute: string) => {
    return (container: HTMLElement, dataAttributeValue: string) => container.querySelector(`[data-${dataAttribute}=${dataAttributeValue}]`);
};