const CutText = (text, maxLength) => {
  if (!text) return ''; // Jika text undefined atau null, kembalikan string kosong
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

export default CutText;
