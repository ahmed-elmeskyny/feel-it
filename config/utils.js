export const CalScore = (data) => {
  let counterP = 0;
  let counterN = 0;
  let counterNN = 0;
  data.forEach((score) => {
    score.Score == "Positif"
      ? counterP++
      : score.Score == "Negatif"
      ? counterNN++
      : counterN++;
  });

  return [counterP, counterNN, counterN];
};
