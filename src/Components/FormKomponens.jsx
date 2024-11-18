import React from "react";

export const FormKomponens = ({ tipus, setTipus }) => {
    
    const handleTipus = (event) => {
        setTipus(event.target.value);
    }

    return (
        <div className="form-controll">
            <label>Válassz típust:</label>
            <select id="tipus" value={tipus} onChange={handleTipus}>
                <option value="post">Posztok</option>
                <option value="comment">Kommentek</option>
            </select>
        </div>
    );
}

export default FormKomponens;