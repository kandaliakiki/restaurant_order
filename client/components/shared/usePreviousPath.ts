const getPreviousPath = (): string => {
  // Explicitly define return type
  if (typeof window !== "undefined") {
    return localStorage.getItem("previousPath") || "/";
  }
  return "/";
};

export default getPreviousPath;
