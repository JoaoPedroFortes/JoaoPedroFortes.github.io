import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import styles from './Avatar.module.css';

function AvatarComponent(props) {
    const { src, alt } = props;
    return (
        <div style={{ display: 'flex', gap: 20 }}>
            <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                    className={styles.AvatarImage}
                    src={src}
                    alt={alt}
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                    {alt}
                </Avatar.Fallback>
            </Avatar.Root>
        </div>
    )
};

export default AvatarComponent;