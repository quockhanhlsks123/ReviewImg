import React, { useEffect, useState } from "react";
import Papa from "papaparse"



class ReactCsvFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        // if (this.props.data !== this.state.nameFile) {
        //     this.setState({
        //         nameFile: this.props.data
        //     })
        //     console.log("check: ", this.state.nameFile)
        try {
            let csvPath = process.env.PUBLIC_URL + `/csvfiles/${this.props.data}`

            let response = await fetch(csvPath)
            if (response.ok) {
                let results = []
                let dataFace = await response.text()
                Papa.parse(dataFace, {
                    header: true,
                    delimiter: ",",
                    complete: (result) => {
                        results.push(result.data)
                    }
                })
                this.setState({
                    data: results
                })
            }
            else {
                console.error("Error reading ${file}: HTTP ${response.status}");
            }
        } catch (error) {
            console.log(error)
        }
        // }
    }

    render() {
        let data = this.state.data
        return (
            <div className="showImg">
                {
                    data.map((item) => {
                        return (
                            item.map((item2) => {
                                return (
                                    <div style={{ float: "left" }} >
                                        <img src={item2.image} style={{ width: "auto", height: "600px", margin: "15px", border: "4px solid gray" }} />
                                    </div>
                                )
                            })
                        )

                    })
                }
            </div>
        )
    }


}



export default ReactCsvFile