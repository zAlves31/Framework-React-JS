import axios from "axios";

/**
 * Rota para o recurso Evento
 */
export const eventResource = '/Evento';

/**
 * Rota para o recurso proximos eventos
 */
export const nextEventResource = 'Evento/ListarProximos';

/**
 * Rota para o recurso Tipos de Eventos
 */
export const eventsTypeResource = '/TiposEvento';

/**
 * Rota para o recurso Login
 */
export const loginResource = '/Login';

const apiPort = '7118';
const localApiUri = `https://localhost:${apiPort}/api`
const externalApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;