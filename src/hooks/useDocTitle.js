import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Hertz`;
        } else {
            document.title = 'Hertz';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
