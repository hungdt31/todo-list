const getDarkColumnColor = (columnId: string): string => {
    switch (columnId) {
        case 'todo':
            return '#4a2728';
        case 'doing':
            return '#513d1d';
        case 'done':
            return '#1d3b29';
        default:
            return '#333';
    }
};

const getLightColumnColor = (columnId: string): string => {
    switch (columnId) {
        case 'todo':
            return '#fff5f5';
        case 'doing':
            return '#fff9db';
        case 'done':
            return '#ECFAE5';
        default:
            return '#333';
    }
};

const getPrimaryColor = (columnId: string): string => {
    switch (columnId) {
        case 'todo':
            return '#c94848';
        case 'doing':
            return '#d8a13f';
        case 'done':
            return '#4caf50';
        default:
            return '#888';
    }
};

const getSecondaryColor = (columnId: string): string => {
    switch (columnId) {
        case 'todo':
            return '#ffa8a8';
        case 'doing':
            return '#ffec99';
        case 'done':
            return '#d8f5a2';
        default:
            return '#888';
    }
};

export const todoHelper = {
    getDarkColumnColor,
    getLightColumnColor,
    getPrimaryColor,
    getSecondaryColor,
};
