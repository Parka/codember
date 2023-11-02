export const decode = (text: string): string => {
  const normalized_words = text.toLowerCase().split(" ");
  const unique_words = new Set(normalized_words);
  const result = [...unique_words].reduce(
    (acc, word) =>
      acc + word + normalized_words.filter((x) => x === word).length,
    ""
  );
  return result;
};
