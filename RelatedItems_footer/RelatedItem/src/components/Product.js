import React from 'react'

class Product extends React.Component {
    constructor(){
        super()
        this.state = {
            reviews: '',
            description: '',
        }
    }

    render(){
        return(
            <div>
                hello world
            </div>
        )
    }
}

export default Product