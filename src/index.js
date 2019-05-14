
import React from "react"
import ReactDOM from "react-dom"
import { observable, runInAction } from "mobx"

import FooList from "./FooList"
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
                    <span className="float-right">
                        <button
                            className="btn btn-link"
                            onClick={ ev => {

                                //runInAction(() => data[0].num++ )
                                data = create();

                                render();
                            } }
                        >
                            Global Render
                        </button>
                    </span>
                </span>
            </div>
        </div>
    </div>
);

function create()
{
    return observable(
        [
            {
                name: "Foo #1",
                num: 123
            },
            {
                name: "Foo #2",
                num: 234
            },
            {
                name: "Foo #3",
                num: 345
            }
        ]
    );
}

let data = create();


function render()
{
    ReactDOM.render(
        <Container>
            <FooList data={ data }/>

        </Container>,
        document.getElementById("root"),
        () => console.log("ready")
    );
}

render();
