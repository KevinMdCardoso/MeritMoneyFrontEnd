/* eslint-disable import/order */
import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line react/prefer-stateless-function
class NegarDoacaoFinalizada extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <form>
                    <FaPlus />
                    <span>A doação foi analisada e negada pelos gestores.</span>
                    <div>
                        <Link to="/HomeGestor">
                            <Button>Ok</Button>
                        </Link>
                    </div>
                </form>
            </Container>
        );
    }
}
export default NegarDoacaoFinalizada;
