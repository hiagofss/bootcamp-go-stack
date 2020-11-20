import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="Test">
          <img
            src="https://avatars0.githubusercontent.com/u/29542456?s=460&u=f925d37e87cbddb77410095e238d729e2b9a6e53&v=4"
            alt="Hiago Souza"
          />

          <div>
            <strong>hiagofss/esustentavel</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="Test">
          <img
            src="https://avatars0.githubusercontent.com/u/29542456?s=460&u=f925d37e87cbddb77410095e238d729e2b9a6e53&v=4"
            alt="Hiago Souza"
          />

          <div>
            <strong>hiagofss/esustentavel</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="Test">
          <img
            src="https://avatars0.githubusercontent.com/u/29542456?s=460&u=f925d37e87cbddb77410095e238d729e2b9a6e53&v=4"
            alt="Hiago Souza"
          />

          <div>
            <strong>hiagofss/esustentavel</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
