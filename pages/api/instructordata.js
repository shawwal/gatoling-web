const instructorData = [
  {
    instructorName: "Yana Zukovskaya",
    coachTitle: "Top Coach",
    verified: true,
    accent: "American",
    nationality: "Russian",
    language: "🇷🇺 🇺🇸",
    bookUrl: "https://www.instagram.com/russiannative_/",
    avatarUrl: "https://gatoling.shawwals.com/instructors/yana.jpg",
    personalDescription:
      "Hello, if you're learning Russian, then you're in the right place ;)",
  },
];

export default function handler(req, res) {
  res.status(200).json({ instructorData });
}
