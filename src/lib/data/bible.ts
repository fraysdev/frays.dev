export type Bible = {
    version: string;
    book: string;
    chapter: number;
    verse: number | string;
    text: string;
}

export const bibles: Bible[] = [
    {
        version: "KJV",
        book: "Exodus",
        chapter: 20,
        verse: 8,
        text: "Remember the sabbath day, to keep it holy."
    },
    {
        version: "KJV",
        book: "Exodus",
        chapter: 20,
        verse: 12,
        text: "Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee."
    },
    {
        version: "NIV",
        book: "Psalms",
        chapter: 106,
        verse: 1,
        text: "Praise the Lord. Give thanks to the Lord, for he is good; His love endures forever."
    },
    {
        version: "NIV",
        book: "Matthew",
        chapter: 5,
        verse: 9,
        text: "Blessed are the peacemakers, for they will be called children of God."
    },
    {
        version: "NIV",
        book: "John",
        chapter: 3,
        verse: 16,
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    },
    {
        version: "KJV",
        book: "1 Thessalonians",
        chapter: 5,
        verse: 17,
        text: "Pray without ceasing."
    },
]