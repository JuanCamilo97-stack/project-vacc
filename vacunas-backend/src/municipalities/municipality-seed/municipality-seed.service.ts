import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipality } from '../municipality.entity';
import { Department } from '../department/department.entity';

@Injectable()
export class MunicipalitySeedService {
  constructor(
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
    
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async isDatabaseEmpty(): Promise<boolean> {
    const departmentCount = await this.departmentRepository.count();
    return departmentCount === 0;
  }

  async seed() {
    const departments = [
        {
            name: 'Antioquia',
            municipalities: ['Medellín', 'Envigado', 'Itagüí', 'Bello', 'Rionegro', 'Sabaneta', 'La Ceja', 'Caldas', 'Copacabana', 'Girardota', 'El Retiro', 'Amagá', 'Barbosa', 'Fredonia', 'Jardín', 'Jericó', 'Guarne', 'Marinilla', 'El Carmen de Viboral', 'Santuario', 'Turbo', 'Apartadó', 'Carepa', 'Necoclí', 'Chigorodó'],
          },
          {
            name: 'Cundinamarca',
            municipalities: ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá', 'Facatativá', 'Girardot', 'Fusagasugá', 'Madrid', 'Mosquera', 'Cajicá', 'La Calera', 'Sopó', 'Tabio', 'Tenjo', 'Tocancipá', 'Villeta', 'Gachancipá', 'Chocontá', 'Ubaté', 'Guaduas', 'La Mesa'],
          },
          {
            name: 'Atlántico',
            municipalities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Galapa', 'Puerto Colombia', 'Santo Tomás', 'Sabanagrande', 'Polonuevo', 'Ponedera', 'Baranoa', 'Palmar de Varela', 'Tubará', 'Juan de Acosta'],
          },
          {
            name: 'Bolívar',
            municipalities: ['Cartagena', 'Magangué', 'Turbaco', 'Arjona', 'El Carmen de Bolívar', 'San Juan Nepomuceno', 'San Jacinto', 'Mompox', 'Cicuco', 'Hatillo de Loba', 'María La Baja'],
          },
          {
            name: 'Boyacá',
            municipalities: ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá', 'Moniquirá', 'Villa de Leyva', 'Paipa', 'Puerto Boyacá', 'Soatá', 'Tota', 'Samacá', 'Garagoa', 'Tibaná', 'Soracá', 'Santa Rosa de Viterbo'],
          },
          {
            name: 'Caldas',
            municipalities: ['Manizales', 'Villamaría', 'Chinchiná', 'Neira', 'Riosucio', 'Anserma', 'La Dorada', 'Pensilvania', 'Salamina', 'Aguadas', 'Viterbo', 'Aranzazu'],
          },
          {
            name: 'Caquetá',
            municipalities: ['Florencia', 'San Vicente del Caguán', 'Belén de los Andaquíes', 'La Montañita', 'El Paujil', 'Puerto Rico', 'Solano', 'Solita'],
          },
          {
            name: 'Casanare',
            municipalities: ['Yopal', 'Aguazul', 'Maní', 'Paz de Ariporo', 'Támara', 'Trinidad', 'Villanueva'],
          },
          {
            name: 'Cauca',
            municipalities: ['Popayán', 'Santander de Quilichao', 'Puerto Tejada', 'Corinto', 'Cajibío', 'El Tambo', 'Guachené', 'La Vega', 'Miranda', 'Patía', 'Piendamó', 'Toribío', 'Timbío', 'Morales', 'Balboa'],
          },
          {
            name: 'Cesar',
            municipalities: ['Valledupar', 'Aguachica', 'Agustín Codazzi', 'Chimichagua', 'Bosconia', 'La Jagua de Ibirico', 'Curumaní', 'Chiriguaná', 'El Copey', 'El Paso'],
          },
          {
            name: 'Chocó',
            municipalities: ['Quibdó', 'Istmina', 'Condoto', 'Bahía Solano', 'Acandí', 'Nuquí', 'Tadó', 'Cértegui', 'Bagadó', 'Lloró'],
          },
          {
            name: 'Córdoba',
            municipalities: ['Montería', 'Cereté', 'Lorica', 'Sahagún', 'Planeta Rica', 'Tierralta', 'Montelíbano', 'Ciénaga de Oro', 'San Pelayo', 'Puerto Escondido'],
          },
          {
            name: 'Guaviare',
            municipalities: ['San José del Guaviare', 'Calamar', 'Miraflores', 'El Retorno'],
          },
          {
            name: 'Huila',
            municipalities: ['Neiva', 'Pitalito', 'Garzón', 'La Plata', 'San Agustín', 'Acevedo', 'Campoalegre', 'Isnos', 'Algeciras', 'Gigante'],
          },
          {
            name: 'La Guajira',
            municipalities: ['Riohacha', 'Maicao', 'Uribia', 'San Juan del Cesar', 'Fonseca', 'Dibulla', 'Villanueva', 'Hatonuevo', 'Barrancas'],
          },
          {
            name: 'Magdalena',
            municipalities: ['Santa Marta', 'Ciénaga', 'Fundación', 'El Banco', 'Plato', 'Aracataca', 'Pivijay', 'Salamina', 'Remolino', 'Tenerife'],
          },
          {
            name: 'Meta',
            municipalities: ['Villavicencio', 'Acacías', 'Granada', 'San Martín', 'Puerto López', 'Cumaral', 'Puerto Gaitán', 'Restrepo', 'San Carlos de Guaroa', 'Guamal'],
          },
          {
            name: 'Nariño',
            municipalities: ['Pasto', 'Tumaco', 'Ipiales', 'Túquerres', 'La Unión', 'Sandoná', 'Barbacoas', 'El Charco', 'Cumbal', 'Francisco Pizarro'],
          },
          {
            name: 'Norte de Santander',
            municipalities: ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario', 'Los Patios', 'Tibú', 'Ábrego', 'Sardinata', 'El Zulia', 'Chinácota'],
          },
          {
            name: 'Putumayo',
            municipalities: ['Mocoa', 'Puerto Asís', 'Orito', 'Sibundoy', 'San Francisco', 'Valle del Guamuez', 'Puerto Leguízamo'],
          },
          {
            name: 'Quindío',
            municipalities: ['Armenia', 'Calarcá', 'Montenegro', 'La Tebaida', 'Quimbaya', 'Filandia', 'Salento', 'Circasia'],
          },
          {
            name: 'Risaralda',
            municipalities: ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal', 'La Virginia', 'Marsella', 'Belén de Umbría', 'Apía', 'Mistrató', 'Guática'],
          },
          {
            name: 'San Andrés y Providencia',
            municipalities: ['San Andrés', 'Providencia'],
          },
          {
            name: 'Santander',
            municipalities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja', 'San Gil', 'Socorro', 'Lebrija', 'Rionegro', 'Cimitarra'],
          },
          {
            name: 'Sucre',
            municipalities: ['Sincelejo', 'Corozal', 'San Marcos', 'Sampués', 'Tolú', 'Coveñas', 'San Onofre', 'Galeras', 'Majagual'],
          },
          {
            name: 'Tolima',
            municipalities: ['Ibagué', 'Espinal', 'Melgar', 'Honda', 'Mariquita', 'Lérida', 'Líbano', 'Purificación', 'Chaparral', 'Flandes'],
          },
          {
            name: 'Valle del Cauca',
            municipalities: ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Cartago', 'Buga', 'Jamundí', 'Yumbo', 'Sevilla', 'Caicedonia', 'Zarzal'],
          },
          {
            name: 'Vaupés',
            municipalities: ['Mitú', 'Carurú'],
          },
          {
            name: 'Vichada',
            municipalities: ['Puerto Carreño', 'La Primavera', 'Santa Rosalía', 'Cumaribo'],
          }
    ];

    for (const departmentData of departments) {
      const department = this.departmentRepository.create({
        name: departmentData.name,
      });
      await this.departmentRepository.save(department);

      for (const municipalityName of departmentData.municipalities) {
        const municipality = this.municipalityRepository.create({
          name: municipalityName,
          department: department,
        });
        await this.municipalityRepository.save(municipality);
      }
    }
  }
}