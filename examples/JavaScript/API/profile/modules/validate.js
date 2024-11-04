export function validateForm(name, email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name.length > 0 && emailPattern.test(email);
  }
  