import { useState } from "react";
import { IBody } from "../../interfaces/body.interface";

const CreateHero = () => {
    const [hero, setHero] = useState<IBody>();

    return (
        <>
            <h1>This is create page</h1>
        </>
    )
}

export default CreateHero;