import React,{useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import svgI from './generated2.svg'
import './style.css'
export default function Home() {
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);
  
    const handleVisibleSection = () => {
      setVisible(!visible);
    };
  
    useEffect(() => {
      if (visible) {
        fetch('https://checkmyhardwareb.onrender.com/getData')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network Error');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Data received:', data);
            setData(data);
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
      }
    }, [visible]); // Se ejecuta cuando `visible` cambia
  return (
    <div className='backgroundC' style={{width:'100%',height:'100%',paddingTop:'50px'}}>    
        <section  className="col-12  " style={{height:'100vh',display:'flex',alignItems:'end'}}>
            <Container className='ml-0 mr-0 container-fluid'>
                <div className="row">
                    <div className="px-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center" >
                        <Row>
                            <h1 style={{fontSize:'3rem',fontWeight:'bold',lineHeight:1,textAlign:'start',color:'white'}}>Verifica los componentes de tu PC</h1>
                            <p style={{color:'white',textAlign:'start'}}> Descubre los detalles de tu hardware con nuestro verificador de componentes facil de usar</p>
                            <Button variant="light" className="col-sm-12- colmd-4 col-lg-4 col-xl-4" onClick={handleVisibleSection}>Consultar</Button>
                        </Row>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ position: 'relative' }}>
                        <div style={{ left:'0xp', overflow: 'hidden',position: 'absolute', zIndex: 0,height:'100%',width:'100%' }}>
                            <Image className='svgAnimated' src={svgI} style={{width:'100%',height:'500px',paddingBottom:'100px'}}/>
                        </div>
                        <Image style={{ position: 'relative', zIndex: 1 }} src="https://static.vecteezy.com/system/resources/previews/009/269/471/original/3d-illustration-computer-keyboard-and-mouse-object-png.png" fluid rounded alt='pc' />
                    </div>
                </div>
            </Container>        
        </section>
        {visible && (
            <section id='sectionCheck' className='pb-5 p-3 d-flex '>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} md={6} lg={6} xl={6} >
                            <Card className='col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2'>
                                <Card.Body>
                                    <Row>
                                        <Col sm={1} md={2} lg={2}xl={2}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
                                                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
                                            </svg>
                                        </Col>
                                        <Col sm={10} md={10} lg={10}xl={10}>
                                            <Card.Title className='text-start fw-bold'>Referencia</Card.Title>

                                        </Col>
                                    </Row>                            
                                    <Card.Text>
                                        <h5 className='text-start fw-bold'>Manufacturado:{data ? data.system.system.manufacturer : 'Cargando...'}</h5>
                                        <h5 className='text-start fw-bold'>Modelo:{data ? data.system.system.model : 'Cargando...'}</h5>
                                        <h5 className='text-start fw-bold'>Bios:{data ? data.system.bios.version : 'Cargando...'}</h5>
                                        <h5 className='text-start fw-bold'>Baseboard/Motherboard:{data ? data.system.system.manufacturer : 'Cargando...'}</h5>
                                        <h5 className='text-start fw-bold'>Chasis:{data ? data.system.system.manufacturer : 'Cargando...'}</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} >
                            <Row className='justify-content-around'>
                                <Card className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={1} md={2} lg={2}xl={2}> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cpu-fill" viewBox="0 0 16 16">
                                                    <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                                                    <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5"/>
                                                </svg>
                                            </Col>
                                            <Col sm={10} md={10} lg={10}xl={10}>
                                                <Card.Title className='text-start fw-bold'>CPU</Card.Title>
                                            </Col>
                                        </Row>                            
                                        <Card.Text>
                                            <h5 className='text-start fw-bold'>Manufacturado:{data ? data.cpu.cpu.manufacturer : 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Marca:{data ? data.cpu.cpu.brand : 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Familia:{data ? data.cpu.cpu.family : 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Procesadores:{data ? data.cpu.cpu.processors : 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Virtualización:{data ? data.cpu.cpu.virtualization : 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Velocidad:{data ? data.cpu.cpuSpeed : 'Cargando...'}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Carousel className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Carousel.Item>
                                        <Card >
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={1} md={2} lg={2}xl={2}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-gpu-card" viewBox="0 0 16 16">
                                                            <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>
                                                            <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5"/>
                                                        </svg>
                                                    </Col>
                                                    <Col sm={10} md={10} lg={10}xl={10}>
                                                        <Card.Title className='text-start fw-bold'>GPU</Card.Title>
                                                    </Col>
                                                </Row>                            
                                                <Card.Text>
                                                    <h5 className='text-start fw-bold'>Manufacturado:{data ? data.graphics.graphics.controllers[1].vendor : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>Modelo:{data ? data.graphics.graphics.controllers[1].model : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>Bus:{data ? data.graphics.graphics.controllers[1].bus : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>V-Ram:{data ? data.graphics.graphics.controllers[1].vram : 'Cargando...'}</h5>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>  
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card >
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={1} md={2} lg={2}xl={2}> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-gpu-card" viewBox="0 0 16 16">
                                                            <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/>
                                                            <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5"/>
                                                        </svg>
                                                    </Col>
                                                    <Col sm={10} md={10} lg={10}xl={10}>
                                                        <Card.Title className='text-start fw-bold'>GPU2</Card.Title>
                                                    </Col>
                                                </Row>                            
                                                <Card.Text>
                                                    <h5 className='text-start fw-bold'>Manufacturado:{data ? data.graphics.graphics.controllers[0].vendor : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>Modelo:{data ? data.graphics.graphics.controllers[0].model : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>Bus:{data ? data.graphics.graphics.controllers[0].bus : 'Cargando...'}</h5>
                                                    <h5 className='text-start fw-bold'>V-Ram:{data ? data.graphics.graphics.controllers[0].vram : 'Cargando...'}</h5>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>  
                                    </Carousel.Item>
                                </Carousel> 
    
                                <Card className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={1} md={2} lg={2}xl={2}> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hdd-fill" viewBox="0 0 16 16">
                                                    <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M.91 7.204A3 3 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782z"/>
                                                </svg>
                                            </Col>
                                            <Col sm={10} md={10} lg={10}xl={10}>
                                                <Card.Title className='text-start fw-bold'>Almacenamiento</Card.Title>
                                            </Col>
                                        </Row>                            
                                        <Card.Text>
                                            <h5 className='text-start fw-bold'>Dispositivo:{data ? data.disk.diskLayout[0].device: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Tipo:{data ? data.disk.diskLayout[0].type: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Nombre:{data ? data.disk.diskLayout[0].name: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Tamaño:{data ? data.disk.diskLayout[0].size: 'Cargando...'}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>  
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} >
                            <Row className='justify-content-around'>
                                <Card className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={1} md={2} lg={2}xl={2}> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-memory" viewBox="0 0 16 16">
                                                    <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z"/>
                                                </svg>
                                            </Col>
                                            <Col sm={10} md={10} lg={10}xl={10}>
                                                <Card.Title className='text-start fw-bold'>Memoria Ram</Card.Title>
                                            </Col>
                                        </Row>                            
                                        <Card.Text>
                                            <h5 className='text-start fw-bold'>Total:{data ? data.memory.mem.total: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Tipo:{data ? data.memory.memLayout[0].type: 'Cargando...'}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>  
                                <Card className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={1} md={2} lg={2}xl={2}> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pci-card-network" viewBox="0 0 16 16">
                                                    <path d="M6.5 9.5v-2h.214a.5.5 0 0 0 .5-.5v-.5h2.572V7a.5.5 0 0 0 .5.5h.214v2z"/>
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m6.714 4a.5.5 0 0 0-.5.5v.5H6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5h-.214V6a.5.5 0 0 0-.5-.5z"/>
                                                    <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm8 0H7v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
                                                </svg>
                                            </Col>
                                            <Col sm={10} md={10} lg={10}xl={10}>
                                                <Card.Title className='text-start fw-bold'>Red</Card.Title>
                                            </Col>
                                        </Row>                            
                                        <Card.Text>
                                            <h5 className='text-start fw-bold'>Interfaz:{data ? data.network.networkInterfaces[1].iface: 'Cargando...'}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>  
                                <Card className='col-sm-12 col-md-3 col-lg-3 col-xl-3 my-2'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={1} md={2} lg={2}xl={2}> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-battery-full" viewBox="0 0 16 16">
                                                    <path d="M2 6h10v4H2z"/>
                                                    <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
                                                </svg>
                                            </Col>
                                            <Col sm={10} md={10} lg={10}xl={10}>
                                                <Card.Title className='text-start fw-bold'>Bateria</Card.Title>
                                            </Col>
                                        </Row>                            
                                        <Card.Text>
                                            <h5 className='text-start fw-bold'>Modelo:{data ? data.battery.battery.model: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Capacidad designada:{data ? data.battery.battery.designedCapacity: 'Cargando...'}</h5>
                                            <h5 className='text-start fw-bold'>Capacidad designada:{data ? data.battery.battery.maxCapacity: 'Cargando...'}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>  
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )}
    </div>

  )
}
