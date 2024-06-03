export const getRandomItems = (items, num) => {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
