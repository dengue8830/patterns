// Problem: execute sequential validations before the final code.
// Solution: sequence of proxies.
function patch(route: string, validations: Function[], callback: Function) {
  // Some context preparations.
  return () => callback();
}

function finalCode() {
  // Some code.
}

function isAuth() {
  return true;
}

function sanitizeParams() {
  return true;
}

const routes: Function[] = [];
routes.push(patch("/api/orders/{id}", [isAuth, sanitizeParams], finalCode));
