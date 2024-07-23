import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ImageAccordian = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div 
            style={{
                position: 'relative',
                borderRadius: '10px',
                height: '140px',
                width: '300px',
                overflow: 'hidden',
                boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            className="container-fluid"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: isHovered ? '0' : '-110%',
                    width: '125%',
                    height: '100%',
                    transition: 'left 2s ease',
                    background: `url(${process.env.PUBLIC_URL}/joinUsImage.jpg)`,
                    backgroundSize: 'cover',
                    transform: isHovered ? 'translateX(0)' : 'translateX(0)',
                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: isHovered ? '0' : '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    transition: 'left 1s ease',
                }}
            ></div>

            <div
                style={{
                    position: 'relative',
                    zIndex: '1',
                    transition: 'transform 0.5s ease, color 0.5s ease',
                    transform: isHovered ? 'translateX(0)' : 'translateX(5%)',
                    textAlign: 'right',
                    color: isHovered ? '#fff' : '#000',
                    fontSize: '1.2rem',
                }}
            >
                {props.text}
            </div>

            <div
                style={{
                    marginTop: '10px',
                    position: 'relative',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'background 0.5s ease',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: isHovered ? 'none' : 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ArrowDropUpIcon
                        style={{
                            fontSize: '35px',
                            color: '#fff',
                            transform: 'rotate(90deg)',
                            transition: 'color 0.3s ease',
                            zIndex: '1',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImageAccordian;
