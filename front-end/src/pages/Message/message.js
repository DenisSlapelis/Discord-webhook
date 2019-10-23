import React, {useState, useMemo } from 'react';
import Preview from '../../component/Preview/preview'
import camera from '../../assets/camera.png'
import './style.css';

export default function Message(){
    const [thumbnail, setThumbnail] = useState(null);
    let [username, setUsername] = useState('');
    let [message, setMessage] = useState('');
    let [imglink, setImglink] = useState('');
    let [lastImg, setLastImg] = useState('');
    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        }, [thumbnail]
    );
    const imageURL = useMemo(
        () => {
            return lastImg === 'imglink' ? imglink : preview;
        }, [lastImg, imglink, preview]
    );

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
                            onChange={event => setUsername(event.target.value)}
                            />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="message">Mensagem:</label>
                    <div className="col-sm-6">
                        <textarea 
                            id="message" 
                            className="form-control" 
                            name="message" 
                            rows="5" 
                            placeholder="Digite uma mensagem..."
                            onChange={event => setMessage(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-3 col-form-label" htmlFor="imglink">Link da imagem:</label>
                    <div className="col-sm-6">
                        <input 
                            className="form-control mt-3"
                            type="text"
                            name="imglink"
                            id="imglink"
                            placeholder="URL"
                            onChange={
                                event => {
                                    setImglink(event.target.value);
                                    setLastImg('imglink');
                                }
                            }
                        />
                    </div>
                </div>
                <div className="row d-block">
                    <p>OU</p>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Avatar:</label>
                    <div className="col-sm-6">
                        <label
                            id="thumbnail" 
                            style={{backgroundImage: `url(${preview})`}}
                            className={thumbnail ? 'has-thumbnail' : ''}
                        >
                            <input 
                                type="file" 
                                id="avatar" 
                                className="form-control-file" 
                                name="avatar" 
                                onChange={
                                    event => {
                                        setThumbnail(event.target.files[0]);
                                        setLastImg('thumbnail');
                                    }
                                }
                            />
                            <img src={camera} alt="Select img"/>
                        </label>
                    </div>
                </div>
                <Preview data={{username, message, imageURL}}></Preview>
                <div className="pb-2">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
