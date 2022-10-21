import React, { useState } from 'react';
import { Input, Button } from '@mui/material';

export const App = () => {
    const [itemDescription, setItemDescription] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    return (
        <div>
            <Input
                value={itemDescription}
                onChange={(event) => {
                    event.preventDefault();
                    setItemDescription(event.target.value);
                }}
            />
            <Button
                onClick={() => {
                    if (itemDescription !== '') {
                        setItems([...items, itemDescription]);
                        setItemDescription('');
                    }
                }}
            >
                Create
            </Button>
            <ul>
                {items.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
};
