import React from 'react';

export default ({ success }) => {
    return (
        <>{ success && <h1>Congratulations! You guessed the word!</h1> }</>
    );
};
