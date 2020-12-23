import React from 'react';
import "semantic-ui-css/semantic.min.css";



//Axios for get request
import axios from 'axios';



class Feedback extends React.Component {
    //initialize an object's state in a class
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
    componentDidMount() {
        //get request
        axios.get('http://localhost/rawnaq/feedback.php').then(res => {

            this.setState({ data: res.data });
        });

    }


    render() {

        return (

            <div className="maincontainer">


                <div className="container mb-5 mt-5 text-left">


                    <div class="ignored ui warning message"><marquee>

                        {this.state.data.map((result) => {
                            return (




                                <span>{result.news} --</span>




                            )
                        })}
                    </marquee>
                    </div>
                </div>
            </div>

        )
    };
}

export default Feedback;