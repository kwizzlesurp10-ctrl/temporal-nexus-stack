import React, { useState, useRef, useEffect } from 'react';

const ResizablePanel = ({
    direction = 'horizontal', // 'horizontal' or 'vertical'
    initialSize = 300,
    minSize = 200,
    maxSize = 600,
    children,
    className = ''
}) => {
    const [size, setSize] = useState(initialSize);
    const [isResizing, setIsResizing] = useState(false);
    const panelRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizing) return;

            const panel = panelRef.current;
            if (!panel) return;

            const rect = panel.getBoundingClientRect();
            let newSize;

            if (direction === 'horizontal') {
                newSize = e.clientX - rect.left;
            } else {
                newSize = e.clientY - rect.top;
            }

            setSize(Math.max(minSize, Math.min(maxSize, newSize)));
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, direction, minSize, maxSize]);

    const style = direction === 'horizontal'
        ? { width: `${size}px` }
        : { height: `${size}px` };

    const resizerClass = direction === 'horizontal'
        ? 'absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500/50 transition'
        : 'absolute left-0 right-0 bottom-0 h-1 cursor-row-resize hover:bg-blue-500/50 transition';

    return (
        <div
            ref={panelRef}
            className={`relative ${className}`}
            style={style}
        >
            {children}
            <div
                className={resizerClass}
                onMouseDown={() => setIsResizing(true)}
            />
        </div>
    );
};

export default ResizablePanel;
