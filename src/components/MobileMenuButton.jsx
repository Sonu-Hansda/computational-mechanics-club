import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function MobileMenuButton({ open, onClick }) {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-textDim hover:text-primary focus:outline-none"
            onClick={onClick}
            aria-label="Toggle menu"
        >
            {!open ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            }
        </motion.button>
    );
}

MobileMenuButton.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
