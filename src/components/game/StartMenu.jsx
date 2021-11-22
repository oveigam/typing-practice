

const StartMenu = ({ onGameStart, result }) => {
    return (
        <>
            {
                result ?
                    <h1>Words per minute: {Math.round(result)}</h1>
                    :
                    <h1>Typing Practice</h1>
            }
            <button onClick={onGameStart}>{result ? 'RETRY' : 'START'}</button>
        </>
    );
}

export default StartMenu;