const classNames = (...clasess) => {
  return clasess.filter(Boolean).join(' ');
};

export default classNames;
