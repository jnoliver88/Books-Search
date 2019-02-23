import React, { Component } from 'react'
import AppTitle from "./AppTitle"

export default class Search extends Component {
    searchBooks = () => {
        //CALL google API connected to search button
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <AppTitle >
                        <h1>(React) Google Books Search</h1>
                        <h3>Search for and Save Books of Interest</h3>
                    </AppTitle>
                </div>

                <div>
                    <NameForm >
                        <h1>This is a form</h1>
                    </NameForm>
                </div>
            </React.Fragment>
        )
    }
}