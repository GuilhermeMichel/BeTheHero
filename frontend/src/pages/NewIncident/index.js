import React,{useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';


export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescripition] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId =localStorage.getItem('ongId');
    async function handleNewIncident(e) {
        e.preventDefault();   

        const data ={
            title,
            description,
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar Caso tente novamente.');
            
        }
    }
    return (  
        <div className="new-incident-container">
        <div className="content"> 
            <section >
            <img src={logoImg} alt="Logo" />
            <h1>Cadastrar novo caso </h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para Home.
            </Link>


            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescripition(e.target.value)}
                />

                <input 
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />


                <button className="button" type="submit">Cancelar</button>
                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    </div>

    );
}