import { useCallback, useEffect, useRef, useState } from "react";
import useRandomWord from './../../hooks/useRandomWord';
import compareWords from './../../util/compareWords';
import Timer from './../common/Timer';
import Button from './../common/Button';
import { motion, useAnimation } from "framer-motion";

const Game = ({ onFinish }) => {
    const getWord = useRandomWord()

    const successAnimation = useAnimation()
    const errorAnimation = useAnimation()

    const correctWords = useRef(0)
    const seconds = useRef(0)

    const [word, setWord] = useState(getWord())
    const [previousWord, setPreviousWord] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        if (!userInput) return
        const comparation = compareWords(userInput, word)

        if (comparation === 'completed') {
            correctWords.current = correctWords.current + 1
            setWord(getWord())
            setPreviousWord(word)
            setUserInput('')
            successAnimation.start({
                y: -200,
                opacity: [0, .5, 1, .5, 0],
                transition: { duration: .5 }
            }).then(() => {
                successAnimation.set({ y: -25, opacity: 0 })
            })
        } else if (comparation === 'error') {
            setUserInput('')
            errorAnimation.start({
                rotate: [-5, 5, -5, 5, -5, 5, -5, 5, 0],
                transition: { duration: .2 }
            })
        }

    }, [userInput, getWord, word, successAnimation, errorAnimation])

    const onTick = useCallback((s) => seconds.current = s, [])

    return (
        <div className="flex-center">
            <div className="timer">
                <Timer onTick={onTick} />
            </div>
            <div className="wordContainer">
                <motion.h2 style={{ y: -25, color: 'green' }} animate={successAnimation} >
                    {previousWord}
                </motion.h2>
                <motion.h2 animate={errorAnimation}>
                    {word}
                </motion.h2>
            </div>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <div style={{ marginTop: 50 }}>
                <Button onClick={() => onFinish(correctWords.current, seconds.current)}>END SESSION</Button>
            </div>
        </div>
    );
}

export default Game;