import css from "./Wrapper.module.css";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => <div className={css.wrapper}>{children}</div>;

export default Wrapper;
