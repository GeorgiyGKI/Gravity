
export const Button = ({
                           className = "",
// @ts-ignore
                           children,
// @ts-ignore
                           ...props
                       }) => {
    return (
        <button type="submit" className="btn-grad">
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};