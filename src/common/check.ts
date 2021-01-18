export const IsEmpty = (obj:any) => {
  if (obj === null || obj === undefined || typeof obj === 'undefined' || obj === '' || obj === 'undefined' || (Object.keys(obj).length === 0 && obj.constructor === Object)) {
    return true;
  } else if (Array.isArray(obj) && obj.length === 0) {
    return true;
  } else {
    return false;
  }
};
