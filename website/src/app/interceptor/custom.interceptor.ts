import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token =localStorage.getItem('angular18token');
  const cloneReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next(cloneReq);
};
