import React from 'react';
import Axios from 'axios';

class Description extends React.Component {
    constructor(props){
        super(props);

            this.state = {
                data: [],
                query: 'http://localhost:3004/Description/beb95fc0-1acf-11ea-b9fe-332f5417770f'
            }
        }
        
        componentDidMount(){
            console.log(this.state.query)
            this.getDescription()
        }


        getDescription(){
            Axios.get(this.state.query)
            .then(({data}) => {
                console.log(data)
                this.setState({data: data})
            })
            .catch(error => console.log(error))
        };

        


        render() {
            return (
        
            <div className="wrap-collapsible">
                <input id="collapsible" className="toggle" type="checkbox"/>
                <label htmlFor="collapsible" className="lbl-toggle">Description</label>   
            <div className="collapsible-content"> 
                {this.state.data.map((el, index) => {
                    return(
                        <div className="content-inner" key={index}> 
                        <p>
                        {el.info} 
                        </p>
                        </div>
                    )
                })}
            </div>
            </div>
        
        )
    };
    
};
    
export default Description;