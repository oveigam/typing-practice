import { motion } from "framer-motion";

const Button = (props) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            {...props}
        >
            {props.children}
        </motion.button>
    );
}

export default Button;