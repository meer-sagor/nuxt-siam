// type ILogin = {
//   email: string;
//   password: string;
// };

// export const useLogin = async ({ email, password }: ILogin) => {
//   const toast = useToast();
//   if (!isValidEmail(email)) {
//     toast.add({ title: 'Hello world!' });
//     return;
//   }

//   return new Promise((resolve, reject) => {

//     $fetch('/sanctum/csrf-cookie').then(response => {
        
//     });

//     $fetch('https://itplanbd.xyz/laravel_api/api/login', {
//       method: 'post',
//       body: {
//         email,
//         password,
//       },
//       headers: {
//         Accept: 'application/json',
//         'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value ?? '',
//         'X-Requested-With': 'XMLHttpRequest',
//       },
//     })
//       .then((res) => resolve(res))
//       .catch((error) => reject(error));
//   });
// };
