/**
 * Splits a long text into sentences with a maximum character length while preserving whole words.
 * If the last word would be cut off, the sentence is extended to include the entire word.
 * 
 * @param text - The input text to be split
 * @param maxLength - The maximum desired length for each sentence
 * @returns An array of strings, where each string is a sentence of approximately maxLength characters
 */
export default function splitTextIntoSentences(text: string, maxLength: number): string {
    // Handle edge cases
    if (!text) return "";
    if (maxLength <= 0) throw new Error('Maximum length must be positive');
    if (text.length <= maxLength) return text;

    // Initialize variables to store our results and current working sentence
    const sentences: string[] = [];
    const words = text.split(' ');
    let currentSentence = '';

    // Process each word in the text
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        // Check if adding the next word (plus a space) would exceed maxLength
        if ((currentSentence + ' ' + word).trim().length <= maxLength) {
            // If within limit, add the word to current sentence
            currentSentence = (currentSentence + ' ' + word).trim();
        } else {
            // If the current sentence is not empty, add it to our results
            if (currentSentence) {
                sentences.push(currentSentence);
            }
            
            // Start a new sentence with the current word
            currentSentence = word;
            
            // Handle case where a single word is longer than maxLength
            if (word.length > maxLength) {
                sentences.push(word);
                currentSentence = '';
            }
        }
    }

    // Don't forget to add the last sentence if it's not empty
    if (currentSentence) {
        sentences.push(currentSentence);
    }

    return sentences.join("\n");
}