export const FormatChildAge = (childAge) => {
  if (childAge === undefined) return '';

  if (childAge >= 12) {
    const years = Math.floor(childAge / 12);
    const months = childAge % 12;
    return `${years} year${years > 1 ? 's' : ''} ${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`;
  } else {
    return `${childAge} month${childAge > 1 ? 's' : ''}`;
  }
};
