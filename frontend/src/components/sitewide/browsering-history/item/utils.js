function generateStars(numberOfStars = 1) {
  const star = "★";
  const rating = [];

  for (let i = 0; i < numberOfStars; i++) {
    rating.push(star);
  }
  return rating.join("");
}

export default generateStars;
