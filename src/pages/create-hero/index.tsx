import { useState } from "react";
import { IHero } from "../../interfaces/hero.interface";

const CreateHero = () => {
    const [hero, setHero] = useState<IHero>();

    const handleCreateHero = () => {
        console.log(hero);
    }

    return (
        <>
            <h1>This is create page</h1>
            <div>
                <label>Title:</label>&nbsp;
                <input value={hero?.title || ''} onChange={(e) => setHero({...hero, title: e.target.value})} placeholder="Enter your title" />
            </div>
            <div>
                <label>Username:</label>&nbsp;
                <input value={hero?.username || ''} onChange={(e) => setHero({...hero, username: e.target.value})} placeholder="Enter your username" />
            </div>
            <div>
                <label>Body:</label>&nbsp;
                <input value={hero?.body || ''} onChange={(e) => setHero({...hero, body: e.target.value})} placeholder="Enter your body" />
            </div>
            <div>
                <label>Phone:</label>&nbsp;
                <input value={hero?.phone || ''} onChange={(e) => setHero({...hero, phone: e.target.value})} placeholder="Enter your phone" />
            </div>
            <div className='btn-wrapper'>
                <div className='btn-primary' onClick={handleCreateHero}>Create</div>
            </div>
        </>
    )
}

export default CreateHero;