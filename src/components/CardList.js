import React from 'react';
import Card from './Card';

const CardList = ({ graphList, onRemove, onClick }) => {
    return (
        <div>
            {graphList.map((graph, index) => {
                return (
                <Card 
                key={index}
                id={graph.id}
                name={graph.name}
                data={graph.data}
                onRemove={onRemove}
                // onClick={onClick}
                />);
            })
            }
        </div>
    );
}

export default CardList;