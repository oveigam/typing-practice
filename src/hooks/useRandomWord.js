import { useCallback, useState } from 'react';
import words from '../data/words.json'
import shuffle from './../util/shuffle';

const useRandomWord = () => {
    const [randomWords] = useState(shuffle(words))

    const getNewWord = useCallback(() => randomWords.pop(), [randomWords])

    return getNewWord;
}

export default useRandomWord;