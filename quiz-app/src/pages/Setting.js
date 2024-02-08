// import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/selectField"


export default function Difficulty() {
    const Setting = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <main>
    <div className='home-card'>
        <div className="difficulty-setting">
            <h1 className='home-title'>MASTER MIND</h1>

            <form onSubmit={handleSubmit}>
                <SelectField label="Category"></SelectField>
                <SelectField label="Difficulty"></SelectField>
                <SelectField label="Type"></SelectField>
            </form>

        </div>
      
    </div>
    </main>
    )
    }
}

