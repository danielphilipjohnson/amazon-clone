const formatImagePathFromBackend = (imageUrl) => {
  return `${process.env.REACT_APP_IMAGEHOST}${imageUrl} `;
};
export default formatImagePathFromBackend;
