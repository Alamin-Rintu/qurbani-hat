import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AnimalsCard = ({animal}) => {
    console.log(animal)
    const {image, name, type, price, weight, category}= animal
    return (
        <div>
            <div>
                <Image src={image} width={400} height={400} alt={name}/>
            </div>
            <div className='flex justify-between items-center'>
                <p>{name}</p>
                <p>{type}</p>

            </div>
            <div className='flex justify-between items-center'>
                <p>{price}</p>
                <p>{weight}</p>

            </div>
            <Button variant='outline'>View Details</Button>
        </div>
    );
};

export default AnimalsCard;