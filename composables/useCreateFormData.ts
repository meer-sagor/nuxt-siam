export type IFormData = {
  [key: string]: string | File;
};

export const useCreateFormData = (data: IFormData): FormData => {
  let formData = new FormData();
  
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];

      // Assuming that string values are directly appended, and File values are appended with the field name
      if (typeof value === 'string') {
        formData.append(key, value);
      } else if (value instanceof File) {
        formData.append(key, value, value.name);
      }
    }
  }

  return formData;
};
