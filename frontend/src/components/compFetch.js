import React, { useEffect, useState } from 'react';

function CompFetch() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        async function miget() {
            let response = await fetch("http://localhost:3001/api");
            let json = await response.json();
            // console.log(json);
        };

        async function mipost() {
            let response;
            let json;
            let mensaje;
            let extra;

            mensaje = {
                uno: 'uno',
                dos: 'dos'
            }
            extra = {
                method: 'post',
                body: JSON.stringify(mensaje)
            };
            response = await fetch("http://localhost:3001/api/login", extra);
            json = await response.json();
            setToken(await json.token);
 
            extra = {
                method:'post',
                headers:{
                    authorization:"Bearer " + token,
                    hola: "aplaaa"
                }
            };
            //console.log(extra.authorization);
            response = await fetch("http://localhost:3001/api/posts",extra);
            json = await response.json();
            console.log(await json);
        }
        mipost();
    },[]);

    return <div>hola</div>;
}

export default CompFetch;