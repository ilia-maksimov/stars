const NUMBER_OF_STARS = 5;

export function buildStarsConfig(fullStars, partStar) {
  let newStars = [];

  for(let i = NUMBER_OF_STARS; i > 0; i--) {
    const last = newStars.slice(-1);
    if (fullStars > 0) {
      newStars.push({ value: 1 });
    } else if (partStar && last && (last[0].value === 1)) {
      newStars.push({ value: partStar, isPart: true });
    } else {
      newStars.push({ value: 0 });
    }

    fullStars--;
  }

  return newStars;
};
