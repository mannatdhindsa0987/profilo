import React, {Component} from 'react'


class App extends Component {
state = {displayBio: false };

toggleRead = () => {
    this.setState({displayBio: !this.state.displayBio});
}


    render(){

        return(
            <div>
            <div>
                <h1>
                    Hello!
                </h1>
                <p>
                    My name is Mannatbir Singh. I'm a Software engineer
                </p>
                <p>
                    I'm always looking forward to working on a meaningful  projects.
                </p>
            </div> 
            {
                this.state.displayBio ? (
                    <div>
                       <p>
                           I'm living malerkotla city. which comes in sangrur district.
                       </p>
                       <p>
                           I love to dp coding. I know a lot about programing.
                       </p>
                       <p>
                           Now, I am learing React JS.
                       </p>
                       <button onClick={this.toggleRead}>Read less</button>
                   </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleRead}>Read more</button>
                        </div>
                    )
            }         
            </div>            
        )
    }
    
}



export default App