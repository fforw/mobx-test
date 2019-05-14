
import React, { useMemo } from "react"
import { observer } from "mobx-react-lite"

const FooList = observer(
    props => {
        const { data } = props;

        const json = useMemo(() => {

            console.log("Recreate json useMemo");
            
            return JSON.stringify(data);
        }, [data]);

        console.log("render FooList", json);

        return (
            <React.Fragment>
                <h1>FooList</h1>

                <div className="list-group">
                    {
                        data.map((e,idx) => (
                            <div
                                key={ idx}
                                className="list-group-item"
                            >
                                {
                                    e.name
                                }
                                /
                                {
                                    e.num
                                }
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
);

export default FooList;
