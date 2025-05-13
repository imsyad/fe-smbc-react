let redirectToLogin = () => {
  window.location.href = "/auth/login";
};

export const setRedirectHandler = (fn: () => void) => {
  redirectToLogin = fn;
};

export const handleUnauthorized = () => {
  redirectToLogin();
};
