import React from 'react'
import './TrustUs.css'

function TrustUs() {

    const clients = [
        { name: 'Client 1', logo: 'img/client1-logo.jpg' },
        { name: 'Client 2', logo: 'img/client2-logo.png' },
        { name: 'Client 3', logo: 'img/client3-logo.jpg' },
    ]

    const marqueeGroups = [clients, clients]

    return (
    <section id="trustus" className="trust reveal">
        <div className="row justify-content-center">
             <div className="col-12 col-md-10 text-center">
                 <div className="section-header">
                    <span className="section-tag">CLIENTES</span>
                    <h2 className="section-title">Ellos confían en nosotros</h2>
                    {/* <p className="section-subtitle">
                        Hemos trabajado con una variedad de clientes, desde startups hasta empresas consolidadas, ayudándoles a transformar sus ideas en soluciones digitales efectivas.
                    </p> */}
                </div>
                 <div className="client-logos" role="region" aria-label="Clientes con los que trabajamos">
                     <div className="client-logos-track">
                         {marqueeGroups.map((group, groupIndex) => (
                             <div className="client-logos-group" key={`group-${groupIndex}`}>
                                 {group.map((client, index) => (
                                     <div className="client-item" key={`${client.name}-${groupIndex}-${index}`}>
                                         <img src={client.logo} className="imglogosempresas" alt={client.name} />
                                     </div>
                                 ))}
                             </div>
                         ))}
                         {marqueeGroups.map((group, groupIndex) => (
                             <div className="client-logos-group" key={`group-${groupIndex}`}>
                                 {group.map((client, index) => (
                                     <div className="client-item" key={`${client.name}-${groupIndex}-${index}`}>
                                         <img src={client.logo} className="imglogosempresas" alt={client.name} />
                                     </div>
                                 ))}
                             </div>
                         ))}
                         {marqueeGroups.map((group, groupIndex) => (
                             <div className="client-logos-group" key={`group-${groupIndex}`}>
                                 {group.map((client, index) => (
                                     <div className="client-item" key={`${client.name}-${groupIndex}-${index}`}>
                                         <img src={client.logo} className="imglogosempresas" alt={client.name} />
                                     </div>
                                 ))}
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
             <div className="dropdown-divider divilog"></div>
        </div>
    </section>
  )
}
      

export default TrustUs