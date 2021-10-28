import React, {useState, useEffect} from 'react';
import Name from './components/Name';
import Date from './components/Date';
import Contact from './components/Contact';
import Error from './components/Error';

import table from './assets/images/table.svg'
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 100%;
`
const ContainerMain = styled.div`
  padding: 15px;
`;
const ContainerTitle = styled.div`
  background-color: #FF6BFF;
  padding: 15px;
  margin-bottom: 15px;

  p{
    max-width: 400px;
    margin: auto;
  }
`
const Title = styled.div`
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  h3{
    margin-top: 10px;
  }

  img{
    width: 20%;
  }
`
const ContainerForm = styled.div`
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
`;
const ContainerImage = styled.div`
  position: relative;
  height: fit-content;
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FF6BFF;
  position: absolute;
  bottom: 0;
  right: 40%;
  display: inline-block;
  color: #000;
  text-align: center;
  font-weight: bold;
  padding: 1px;

  @media ( max-width : 400px){
    width: 15px;
    height: 15px;
    font-size: 10px;
  }
`;
const Image = styled.img`
  height: fit-content;
  max-width: 50%;
  border: 2px solid #FF6BFF;
  border-radius: 30%;
  padding: 4px;
`
const Form = styled.form`
    max-width: 400px;
    margin: auto;
`;

const ContainerSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  max-width: 400px;
`

const Result = styled.div`
  background-color: #FF6BFF;
  max-width: 400px;
  margin: auto;
  p {
    padding: 10px;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #FF1B82;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;

  &:hover{
    background-color: #F70071;
  }
`;

function App() {

  // LOCAL STORAGE
  let dataInit = JSON.parse(localStorage.getItem('data'))
  if(!dataInit){
    dataInit = {}
  }

  // STATES
  const [data, setData] = useState({
      name: '',
      secondName: '',
      firstLastname: '',
      secondLastname: '',
      day: '',
      month: '',
      year: '',
      email:'',
      phone: '',
  });
  const [ result, setResult ] = useState(false);
  // STATE DE CAMPOS REQUERIDOS POR SECCIÓN NOMBRE
  const [ updatingName, setUpdatingname ] = useState(false);
  // STATE DE CAMPOS REQUERIDOS POR SECCIÓN FECHA
  const [ updatingDate, setUpdatingdate ] = useState(false);
  // STATE DE CAMPOS REQUERIDOS POR SECCIÓN CONTACTO
  const [ updatingContact, setUpdatingcontact ] = useState(false);
  // STATE DE CAMPOS REQUERIDOS
  const [ error, setError ] = useState(false);

  // EXTRAEMOS LA DATA
  const {name, secondName, firstLastname, secondLastname, day, month, year, email, phone } = data;

  useEffect(() => {
    if(dataInit){
      localStorage.setItem('data', JSON.stringify(data))
    } else {
      localStorage.setItem('data', JSON.stringify({}))
    }
    // Updating name - PARA IR MOSTRANDO LOS CAMPOS LLENADOS
    if( name.trim() === '' || firstLastname.trim() === '' || secondLastname.trim() === ''){
      setUpdatingname(false)
    } else{
      setUpdatingname(true)
    }
    // Updating date
    if( day.trim() === '' || month.trim() === '' || year.trim() === '' ){
      setUpdatingdate(false)
    } else{
      setUpdatingdate(true)
    }
    // Updating contact
    if( email.trim() === '' || phone.trim() === '' ){
      setUpdatingcontact(false)
    } else{
      setUpdatingcontact(true)
    }
  }, [name, secondName, firstLastname, secondLastname,day, month, year, email, phone])
  
  // MANDAMOS LA DATA CON EL EVENTO SUBMIT
  const submitData = (e) =>{
    e.preventDefault();
    if( !updatingName || !updatingDate || !updatingContact){
      setError(true)
      return
    }
    setError(false)
    setResult(true)
  }
  return (
    <Container>
      <ContainerTitle>
          <Title>
            <div>
              <h3>Título de formulario</h3>
            </div>
            <img src= {table} />
          </Title>
          <p>En menos de 5 minutos</p>
      </ContainerTitle>
      <div className="App">
      {/* <ProgressBar time={time}/> */}
    </div>
      <ContainerMain>
        <ContainerForm>
          <Form onSubmit={submitData}>
            <ContainerSection>
              <ContainerImage>
                <Image src="https://media.istockphoto.com/photos/happy-young-woman-studio-portrait-picture-id1277996375?s=612x612" alt="Profile"></Image>
                <Circle>&#10003;</Circle>
              </ContainerImage>
              <Name 
                data={data}
                setData = {setData}
              />
              
            </ContainerSection>
            { updatingName ? <Result><p>{`${name} ${secondName} ${firstLastname} ${secondLastname}`}</p></Result> : null } 
            <ContainerSection>
              <ContainerImage>
                <Image src="https://media.istockphoto.com/photos/happy-young-woman-studio-portrait-picture-id1277996375?s=612x612" alt="Profile"></Image>
                <Circle>&#10003;</Circle>
              </ContainerImage>
              <Date 
                data={data}
                setData = {setData}
              />
            </ContainerSection>
            { updatingDate ? <Result><p>{`${day} ${month} ${year}`}</p></Result> : null }
            <ContainerSection>
              <ContainerImage>
                <Image src="https://media.istockphoto.com/photos/happy-young-woman-studio-portrait-picture-id1277996375?s=612x612" alt="Profile"></Image>
                <Circle>&#10003;</Circle>
              </ContainerImage>
              <Contact 
                data={data}
                setData = {setData}
              />
            </ContainerSection>
            { updatingContact ? 
                <Result>
                  <p>{`Correo electrónico: ${email}`}</p>
                  <p>{`Teléfono celular: ${phone}`}</p>
                </Result> 
            : null}
            { error ? <Error mensaje='Todos los campos son requeridos' /> : null}
            <Button type='submit'>Iniciar</Button>
          </Form>
        </ContainerForm>  
        { result ? 
          <Result>
            <p>{`Fecha de nacimiento: ${day} ${month} ${year}`}</p>
            <p>{`Correo electrónico: ${email}`}</p>
            <p>{`Teléfono celular: ${phone}`}</p>
            <p>{`Nombre: ${name} ${secondName} ${firstLastname} ${secondLastname}`}</p>
          </Result> 
          : null}
      </ContainerMain> 
    </Container>
  );
}

export default App;
