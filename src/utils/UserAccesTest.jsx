import PageNotFound from "../pages/PageNotFound";

export const ConditionalAccessComponent = ({ children }) => {
    const access = localStorage.getItem("access");

    if (access === "client") {
        return <PageNotFound />;
    } else {
        return <>{children}</>;
    }
};