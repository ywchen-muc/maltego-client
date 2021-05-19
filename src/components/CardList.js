import React from 'react';
import Card from './Card';

const CardList = ({ graphList, onRemove }) => {
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
                />);
            })
            }
        </div>
    );
}

export default CardList;