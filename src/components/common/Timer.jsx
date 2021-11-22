import { useEffect, useState } from "react"

const Timer = ({ onTick }) => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(s => {
                if (onTick) {
                    onTick(s + 1)
                }
                return s + 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [onTick])

    return (
        <div>
            {seconds}
        </div>
    );
}

export default Timer;