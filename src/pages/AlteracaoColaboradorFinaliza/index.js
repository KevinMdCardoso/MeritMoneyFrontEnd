/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prefer-stateless-function
class AlteracaoColaboradorFinaliza extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <form>
                    <FaCheck />
                    <span>A alteraçao foi salva com sucesso.</span>
                    <div>
                        <Link to="/Colaboradores">
                            <Button>Ok</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default AlteracaoColaboradorFinaliza;
