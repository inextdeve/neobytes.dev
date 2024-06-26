const loader = ({ src }) => {
  // Define your custom loader here
  return `http://38.60.249.19:1337${src}`;
};

class FetchError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export { loader, FetchError };
