import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

function CompPrivado() {

    function hola(event) {

        let mi = localStorage.getItem('token');
        console.log(typeof mi === 'string');
        event.preventDefault();
        
        async function mipost(){
            let extra = {
                method:'post',
                headers:{
                    authorization: "Bearer " + mi,
                    hola:"aplaaaa"
                }
            }
            let response = await fetch("http://localhost:3001/api/posts",extra);
            let json = await response.json();
            console.log(await json);
        }
        mipost();
    }
    return <Container>
        <h1>estas en la vista privada</h1>
        <Form onClick={hola}>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form></Container>;
}
export default CompPrivado;