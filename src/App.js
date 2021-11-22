import { useCallback, useState } from "react";
import StartMenu from './components/game/StartMenu';
import Game from './components/game/Game';

function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [result, setResult] = useState()

  const startHandler = useCallback(() => {
    setIsPlaying(true)
    setResult(null)
  }, [])

  const finishHandler = useCallback((words, seconds) => {
    const minutes = seconds / 60
    setResult(words > 0 ? words / minutes : 0)
    setIsPlaying(false)
  }, [])

  return (
    <div className="app flex-center">
      {
        isPlaying ?
          <Game onFinish={finishHandler} />
          :
          <StartMenu onGameStart={startHandler} result={result} />
      }
    </div>
  );
}

export default App;