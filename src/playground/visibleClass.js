class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)

        //to bind method to an instance of this class
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        
        //state at this beginning
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey visibility is true, so this is being seen</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));