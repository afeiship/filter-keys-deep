const filterKeysDeep = (obj: any, ignoreKeys: string[]) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => filterKeysDeep(item, ignoreKeys));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      if (!ignoreKeys.includes(key)) {
        acc[key] = filterKeysDeep(obj[key], ignoreKeys);
      }
      return acc;
    }, {});
  }
  return obj;
};

export default filterKeysDeep;
