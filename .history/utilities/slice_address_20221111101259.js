const sliceAddrees = (address) => {
  if (address) {
    return (
      address.slice(0, 5) + address.slice(adress.length - 5, address.length - 1)
    );
  }
};

export { sliceAddrees };
