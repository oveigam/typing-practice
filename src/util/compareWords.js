const compareWords = (word1, word2) => {
    if (word1 === word2) {
        return 'completed'
    } else {
        const arr1 = word1.split('')
        const arr2 = word2.split('')

        const minChar = arr1.length < arr2.length ? arr1.length : arr2.length

        for (let i = 0; i < minChar; i++) {
            if (arr1[i] !== arr2[i]) {
                return 'error'
            }
        }

        return 'correct'
    }
}

export default compareWords