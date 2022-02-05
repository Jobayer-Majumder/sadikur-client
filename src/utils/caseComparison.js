

export const caseInsensitiveComparison = (_string1, _string2) => {
    return _string1?.localeCompare(_string2, 'en', { sensitivity: 'case' }) === 0;
};