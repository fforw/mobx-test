
import React from "react"
import ReactDOM from "react-dom"

// noinspection ES6UnusedImports
import CSS from "./style.css"

const Container = props => (
    <div className="container">
        <div className="row">
            <div className="col">
                {
                    props.children
                }
                <hr/>
                <span className="text-muted">
                    (c) 2018 Quinscape GmbH
                </span>
            </div>
        </div>
    </div>
);


ReactDOM.render(
    <Container>
        <h1>Test</h1>
            
    </Container>,
    document.getElementById("root"),
    () => console.log("ready")
);
