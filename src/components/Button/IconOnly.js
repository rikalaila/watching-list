import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconBack } from '../../assets';

const IconOnly = ({ onPress, icon }) => {
    const Icon = () => {
        if (icon === 'arrow-back') {
            return <IconBack />;
        }
        return <IconBack />;
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    );
};

export default IconOnly;