

export const shuffleArray = (array: any[]) => 
[...array].sort(() => Math.random() - 0.5) // This is a quick fix to get a random number