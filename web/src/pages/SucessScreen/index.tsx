import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

const SucessScreen = () => {
    const history = useHistory();

    setTimeout(() => { history.push('/') }, 2000);

    return (
        <div id="fundo">
            <FiCheckCircle id="icon" />
            <h2 id="text">Ponto de coleta<br />cadastrado com sucesso</h2>
        </div>
    );
}

export default SucessScreen;