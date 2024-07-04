const withGreeting = (Component) =>{
    const WrappedComponent=(props)=>{
        return (
            <div>
                <h2>Hello! Welcome to our site.</h2>
                <Component {...props} />
            </div>
        )
    }
    return WrappedComponent;
}

export default withGreeting;