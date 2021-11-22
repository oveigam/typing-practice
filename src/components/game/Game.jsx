import { useCallback, useEffect, useRef, useState } from "react";
import useRandomWord from './../../hooks/useRandomWord';
import compareWords from './../../util/compareWords';
import Timer from './../common/Timer';

const Game = ({ onFinish }) => {
    const getWord = useRandomWord()

    const correctWords = useRef(0)
    const seconds = useRef(0)

    const [word, setWord] = useState(getWord())
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        if (!userInput) return
        const comparation = compareWords(userInput, word)

        if (comparation === 'completed') {
            correctWords.current = correctWords.current + 1
            setWord(getWord())
            setUserInput('')
        } else if (comparation === 'error') {
            setUserInput('')
        }

    }, [userInput, getWord, word])

    const onTick = useCallback((s) => seconds.current = s, [])

    return (
        <div className="flex-center">
            <div className="timer">
                <Timer onTick={onTick} />
            </div>
            <h2>{word}</h2>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <div style={{ marginTop: 50 }}>
                <button onClick={() => onFinish(correctWords.current, seconds.current)}>END SESSION</button>
            </div>
        </div>
    );
}

export default Game;