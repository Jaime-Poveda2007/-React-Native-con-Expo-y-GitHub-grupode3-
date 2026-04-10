import { useState } from 'react';
import ListaScreen from './ListaScreen';

// Iconos SVG simples, sin dependencias
function IconoInicio({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconoLista({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function IconoPerfil({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HomeScreen() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ color: '#FFFFFF' }}>Bienvenido</h2>
      <p style={{ color: '#888' }}>App de streamers de ajedrez en Chess.com</p>
    </div>
  );
}

function PerfilScreen() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ color: '#FFFFFF' }}>Perfil</h2>
      <p style={{ color: '#888' }}>Función original del integrante C</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  function mostrarPantalla() {
    if (activeTab === 'home') return <HomeScreen />;
    if (activeTab === 'lista') return <ListaScreen />;
    if (activeTab === 'perfil') return <PerfilScreen />;
  }

  return (
    <div style={estilos.contenedor}>

      <div style={estilos.cabecera}>
        <span>Chess Streamers</span>
      </div>

      <div style={estilos.contenido}>
        {mostrarPantalla()}
      </div>

      <div style={estilos.barraDeNavegacion}>

        <button
          onClick={() => setActiveTab('home')}
          style={activeTab === 'home' ? estilos.pestañaActiva : estilos.pestaña}
        >
          <IconoInicio color={activeTab === 'home' ? '#FFFFFF' : '#555'} />
          <span>Inicio</span>
        </button>

        <button
          onClick={() => setActiveTab('lista')}
          style={activeTab === 'lista' ? estilos.pestañaActiva : estilos.pestaña}
        >
          <IconoLista color={activeTab === 'lista' ? '#FFFFFF' : '#555'} />
          <span>Lista</span>
        </button>

        <button
          onClick={() => setActiveTab('perfil')}
          style={activeTab === 'perfil' ? estilos.pestañaActiva : estilos.pestaña}
        >
          <IconoPerfil color={activeTab === 'perfil' ? '#FFFFFF' : '#555'} />
          <span>Perfil</span>
        </button>

      </div>
    </div>
  );
}

const estilos = {
  contenedor: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#111111',
    fontFamily: 'sans-serif',
  },
  cabecera: {
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
    padding: '16px',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #333',
    letterSpacing: 1,
  },
  contenido: {
    flex: 1,
    overflow: 'auto',
  },
  barraDeNavegacion: {
    display: 'flex',
    borderTop: '1px solid #333',
    backgroundColor: '#1a1a1a',
  },
  pestaña: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    gap: 4,
    color: '#555',
    fontSize: 11,
  },
  pestañaActiva: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    gap: 4,
    color: '#FFFFFF',
    fontSize: 11,
    borderTop: '2px solid #FFFFFF',
  },
};