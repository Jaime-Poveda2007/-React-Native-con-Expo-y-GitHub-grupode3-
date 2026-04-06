import { useState } from 'react';
import ListaScreen from './ListaScreen';
import FuncionOriginal from './screens/FuncionOriginal'; 

const TABS = [
  { key: 'home',  label: 'Inicio', icon: '🏠' },
  { key: 'lista', label: 'Lista',  icon: '♟️' },
  { key: 'perfil',label: 'Perfil', icon: '👤' },
];

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
    <div style={s.screen}>
      <h2 style={{ color: '#FFF' }}>Perfil</h2>
      <p style={{ color: '#aaa' }}>Función original del integrante C</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    if (activeTab === 'home')  return <HomeScreen />;
    if (activeTab === 'lista') return <ListaScreen />;
    if (activeTab === 'perfil') return <PerfilScreen />;
  };

  return (
    <div style={estilos.contenedor}>

      {/* Cabecera */}
      <div style={s.header}>
        <span>♟ Chess Streamers</span>
      </div>

      {/* Pantalla activa */}
      <div style={s.content}>
        {renderScreen()}
      </div>

      {/* Barra de pestañas */}
      <div style={s.tabBar}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{ ...s.tabItem, ...(active ? s.tabActive : {}) }}
            >
              <span style={{ fontSize: 22 }}>{tab.icon}</span>
              <span style={{ fontSize: 11, color: active ? '#769656' : '#aaa' }}>
                {tab.label}
              </span>
              {active && <div style={s.underline} />}
            </button>
          );
        })}
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