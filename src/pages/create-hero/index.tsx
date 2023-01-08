import React from 'react';
import { useState } from "react";
import { useQueryClient } from 'react-query';
import { useAddHero } from "../../hooks/useHeros";
import { IHero } from "../../interfaces/hero.interface";

const CreateHero = () => {
    const [hero, setHero] = useState<IHero>({});

    const _successAddHero = () => {
        console.log("You have been add hero successfully");
    }

    const _errorAddHero = () => {
        console.log("Can't add hero!");
    }

    const { mutate: addHero } = useAddHero(_successAddHero, _errorAddHero);

    const handleAddHero = () => {
        addHero(hero);
        setHero({});
    }

    return (
        <>
            <h1>This is create page</h1>
            <div>
                <label>Title:</label>
                <div>
                    <input className="input-control" value={hero?.title || ''} onChange={(e) => setHero({...hero, title: e.target.value})} placeholder="Enter your title" />
                </div>
            </div>
            <div className="mt-1">
                <label>Username:</label>
                <div>
                    <input className="input-control" value={hero?.username || ''} onChange={(e) => setHero({...hero, username: e.target.value})} placeholder="Enter your username" />
                </div>

            </div>
            <div className="mt-1">
                <label>Body:</label>
                <div>
                    <input className="input-control" value={hero?.body || ''} onChange={(e) => setHero({...hero, body: e.target.value})} placeholder="Enter your body" />
                </div>
            </div>
            <div className="mt-1">
                <label>Phone:</label>
                <div>
                    <input className="input-control" value={hero?.phone || ''} onChange={(e) => setHero({...hero, phone: e.target.value})} placeholder="Enter your phone" />
                </div>
            </div>
            <div className='btn-wrapper mt-1'>
                <div className='btn-primary' onClick={handleAddHero}>Create</div>
            </div>
        </>
    )
}

export default CreateHero;