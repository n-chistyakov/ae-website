const STOPWORDS = new Set(['the', 'by', 'of', 'and']);
const ACRONYM = /^[A-Z0-9]{2,4}$/;

/** "IG Group" -> "IG", "HIIT the Beat by Breakletics" -> "HB", "BPP" -> "BPP" */
export function initials(name: string): string {
  const words = name.split(/\s+/).filter((word) => !STOPWORDS.has(word.toLowerCase()));
  if (words.length === 1) {
    return ACRONYM.test(words[0]) ? words[0] : words[0].slice(0, 2).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}
