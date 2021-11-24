import Button from './../common/Button';

const StartMenu = ({ onGameStart, result }) => {
    return (
        <>
            {
                result ?
                    <h1>Words per minute: {Math.round(result)}</h1>
                    :
                    <h1>Typing Practice</h1>
            }
            <Button onClick={onGameStart}>{result ? 'RETRY' : 'START'}</Button>
        </>
    );
}

export default StartMenu;