export interface KeydownEventInterface {
key: '';
preventDefault();
}

export interface PasteEventInterface {
clipboardData: {
  getData(foo);
};
preventDefault();
}
