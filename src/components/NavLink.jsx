import clsx from 'clsx';
export default function NavLink({ href, children, active }) {
    return (
        <a
            href={href}
            className={clsx(
                'relative capitalize font-semibold transition-colors duration-300',
                active
                    ? 'text-primary'
                    : 'text-textDim hover:text-primary'
            )}
        >
            {children}
            <span
                className={clsx(
                    'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                )}
            />
        </a>

    );
}