import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReadCsvFile from "./ReactCsvFile";

const csvFiles = [
    "ChristmasFace1.csv",
    "ChristmasFace2.csv",
    "ChristmasFace3.csv",
    "ChristmasFace4.csv",
    "ChristmasFace5.csv",
    "ChristmasFace6.csv",
    "ChristmasFace7.csv",
    "ChristmasFace8.csv",
    "ChristmasFace9.csv",
    "ChristmasFace10.csv",
    "ChristmasFace11.csv",
    "ChristmasFace12.csv",
    "ChristmasFace13.csv",
    "ChristmasFace14.csv",
    "ChristmasFace15.csv",
    "ChristmasFace16.csv",
    "ChristmasFace17.csv",
    "ChristmasFace18.csv",
    "ChristmasFace19.csv",
    "KidFace1.csv"
]

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileName: ""
        }
    }


    handleData = (item) => {
        this.setState({
            fileName: item
        })

    }


    render() {
        return (
            <>
                <div style={{ position: "fixed" }}>
                    {
                        csvFiles && csvFiles.map((item, index) => {
                            return (
                                <div key={index}>
                                    <button className="custom-button" onClick={() => this.handleData(item)} style={{ margin: "5px" }}>
                                        {item}
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
                <ReadCsvFile data={this.state.fileName} />
            </>

        )

    }


}

export default Home