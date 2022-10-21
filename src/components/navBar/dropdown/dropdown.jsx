import React from 'react';

const Dropdown = () => {
    return (
        <>
        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
        </ul>
        </>
    );
}

export default Dropdown;
