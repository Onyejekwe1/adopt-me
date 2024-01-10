import { Link } from "react-router-dom";
import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("error occured!", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    Error occurred with this listing!. <Link to="/"> Back to Home Page</Link>
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
