import React from 'react';
import Preview from '../Preview/preview'
import camera from '../../assets/camera.png'
import './style.css';

export default function Message(){
    return(
        <div className="container msgForm mt-4">
            <form>
                <div className="form-group row pt-4">
                    <label className="col-sm-3 col-form-label" htmlFor="username">Usuário:</label>
                    <div className="col-sm-6">
                        <input 
                            className="form-control"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Usuário da mensagem"
                            />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="message">Mensagem:</label>
                    <div className="col-sm-6">
                        <textarea id="message" className="form-control" name="message" rows="5" placeholder="Digite uma mensagem..."/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Avatar:</label>
                    <div className="col-sm-6">
                        <label htmlFor="avatar" id="thumbnail">
                            <input type="file" id="avatar" className="form-control-file" name="avatar"/>
                            <img src={camera} alt="Select img"/>
                        </label>
                    </div>
                </div>
                <Preview></Preview>
                <div className="pb-2">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
