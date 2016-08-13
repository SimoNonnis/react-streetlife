export default function clean (text) {

  if (text) {
    var pure = text
      .replace(/&nbsp;/g, '')
      .replace(/<p>/g, '');
    return pure;
  }

}
