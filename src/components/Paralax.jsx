import React, { useRef, useEffect } from 'react';

const ParallaxEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const parallaxContainer = containerRef.current;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = parallaxContainer;
            const offsetX = (clientX / offsetWidth - 0.5) * 20; // Reduce the movement
            const offsetY = (clientY / offsetHeight - 0.5) * 20; // Reduce the movement

            parallaxContainer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`; // Zoom in a little bit
        };

        parallaxContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            parallaxContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden perspective-1000">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm transform translate-x-0 translate-y-0 scale-100"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')`, // Add your background image URL here
                }}
                ref={containerRef}
            ></div>
            <div className="relative z-10 text-white text-center p-20">
                <h1>Your Content Goes Here</h1>
                <p>More content...</p>
            </div>
        </div>
    );
};

export default ParallaxEffect;
