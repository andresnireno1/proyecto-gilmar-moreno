import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function MapaCampus() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [aulaEncontrada, setAulaEncontrada] = useState(null);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const [torreSel, setTorreSel] = useState(null);
  const [pisoSel, setPisoSel] = useState(null);
  const [aulas, setAulas] = useState([]);

  const buscarAula = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');
    setAulaEncontrada(null);
    try {
      const response = await api.get(`/aulas/codigo/${busqueda}`);
      if (response.data) {
        setAulaEncontrada(response.data);
      } else {
        setError('No se encontraron resultados. Verifica la información ingresada.');
      }
    } catch (err) {
      setError('No se encontraron resultados. Verifica la información ingresada.');
    }
    setCargando(false);
  };

  const cargarAulas = async (idPiso) => {
    try {
      const response = await api.get(`/aulas/piso/${idPiso}`);
      setAulas(response.data);
    } catch (err) {
      setAulas([]);
    }
  };

  const seleccionarPiso = (piso) => {
    setPisoSel(piso);
    cargarAulas(piso.id);
  };

  const pisosTorre1 = Array.from({ length: 20 }, (_, i) => ({ id: i + 2, numero: i + 1 }));
  const pisosTorre2 = Array.from({ length: 10 }, (_, i) => ({ id: i + 23, numero: i + 1 }));

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/estudiante')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapa del Campus</h2>

        {/* Buscador */}
        <form onSubmit={buscarAula} className="flex gap-2 mb-6">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por código de aula (ej: A101)..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition" disabled={cargando}>
            {cargando ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        {aulaEncontrada && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
            <p><strong>Aula encontrada:</strong> {aulaEncontrada.codigo}</p>
            <p><strong>Capacidad:</strong> {aulaEncontrada.capacidad} estudiantes</p>
            <p><strong>Estado:</strong> {aulaEncontrada.estado}</p>
          </div>
        )}

        {/* Mapa SVG */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Plano del Campus - Corporación Universitaria Remington</h3>

          <div className="flex gap-8 justify-center">
            {/* Torre 1 */}
            <div className="flex flex-col items-center">
              <div
                className={`w-48 bg-blue-800 text-white text-center py-2 rounded-t-lg font-bold cursor-pointer hover:bg-blue-900 transition ${torreSel === 1 ? 'ring-4 ring-yellow-400' : ''}`}
                onClick={() => { setTorreSel(1); setPisoSel(null); setAulas([]); }}
              >
                Torre 1
                <div className="text-xs font-normal">20 pisos</div>
              </div>
              <div className="border-2 border-blue-800 w-48 overflow-hidden rounded-b-lg">
                {pisosTorre1.slice().reverse().map((piso) => (
                  <div
                    key={piso.id}
                    onClick={() => { setTorreSel(1); seleccionarPiso(piso); }}
                    className={`border-b border-blue-200 px-3 py-1 text-sm cursor-pointer hover:bg-blue-50 transition flex justify-between items-center
                      ${pisoSel?.numero === piso.numero && torreSel === 1 ? 'bg-yellow-100 font-semibold text-blue-800' : 'text-gray-700'}`}
                  >
                    <span>Piso {piso.numero}</span>
                    <span className="text-xs text-gray-400">▶</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Torre 2 */}
            <div className="flex flex-col items-center">
              <div
                className={`w-48 bg-green-700 text-white text-center py-2 rounded-t-lg font-bold cursor-pointer hover:bg-green-800 transition ${torreSel === 2 ? 'ring-4 ring-yellow-400' : ''}`}
                onClick={() => { setTorreSel(2); setPisoSel(null); setAulas([]); }}
              >
                Torre 2
                <div className="text-xs font-normal">2 pisos</div>
              </div>
              <div className="border-2 border-green-700 w-48 rounded-b-lg overflow-hidden">
                {pisosTorre2.slice().reverse().map((piso) => (
                  <div
                    key={piso.id}
                    onClick={() => { setTorreSel(2); seleccionarPiso(piso); }}
                    className={`border-b border-green-200 px-3 py-1 text-sm cursor-pointer hover:bg-green-50 transition flex justify-between items-center
                      ${pisoSel?.numero === piso.numero && torreSel === 2 ? 'bg-yellow-100 font-semibold text-green-800' : 'text-gray-700'}`}
                  >
                    <span>Piso {piso.numero}</span>
                    <span className="text-xs text-gray-400">▶</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel de aulas */}
            {pisoSel && (
              <div className="flex-1 max-w-sm">
                <div className={`text-white text-center py-2 rounded-t-lg font-bold ${torreSel === 1 ? 'bg-blue-800' : 'bg-green-700'}`}>
                  Torre {torreSel} — Piso {pisoSel.numero}
                </div>
                <div className="border-2 border-gray-200 rounded-b-lg p-3 min-h-32">
                  {aulas.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center mt-4">No hay aulas registradas en este piso</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {aulas.map((aula) => (
                        <div
                          key={aula.idAula}
                          className={`p-2 rounded text-sm text-center font-medium border-2 cursor-pointer transition
                            ${aula.estado === 'DISPONIBLE' ? 'bg-green-50 border-green-400 text-green-800 hover:bg-green-100' :
                              aula.estado === 'OCUPADA' ? 'bg-red-50 border-red-400 text-red-800' :
                              'bg-yellow-50 border-yellow-400 text-yellow-800'}`}
                        >
                          <div className="font-bold">{aula.codigo}</div>
                          <div className="text-xs">{aula.capacidad} est.</div>
                          <div className="text-xs">{aula.estado}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Leyenda */}
          <div className="mt-6 flex gap-4 justify-center text-sm">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded"></div>
              <span>Disponible</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded"></div>
              <span>Ocupada</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-400 rounded"></div>
              <span>Mantenimiento</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
