import React from 'react';
import Image from 'next/image';
import { GroupCardProps } from '../../app/types/types';

const GroupCard: React.FC<GroupCardProps> = ({
    image,
    title,
    members,
    department,
    memberLimit,
    className,
}) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
            <Image src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className="flex mb-2">
                    <div className="mr-4">
                        <p className="text-gray-600">Members</p>
                        <p>{members}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Department</p>
                        <p>{department}</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-600">Member Limit</p>
                    <p>{memberLimit === 0 ? 'No Limit' : memberLimit}</p>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;