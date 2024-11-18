import React from "react";

export const ListaKomponens = ({ elemek }) => {
    return (
        <div className="row">
            <ul>
                {
                    elemek.map((elem)=>(
                        <li key={elem.id} style={{ padding: "10px", margin: "10px 0px 10px 0px", borderBottom: "1px solid gray" }}>
                            {
                                "postId" in elem ? (
                                    <>
                                        <h2>Hozzászólás:</h2>
                                        <p>Név: {elem.name}</p>
                                        <p>Email: {elem.email}</p>
                                        <p>Tartalom: {elem.body}</p>
                                    </>
                                ) : (
                                    <>
                                        <h2>Poszt:</h2>
                                        <p>Cím: {elem.title}</p>
                                        <p>Tartalom: { elem.body}</p>
                                    </>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListaKomponens;