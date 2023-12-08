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

/*
* Rota para o recurso listar meus eventos
*/
export const myEventsResource = 'Presencas/ListarMinhas';

/*
* Rota para o recurso Presenca Evento
 */
export const presenceEventResource = '/Presencas'

/*
* Rota para o recurso Presenca Evento
 */
export const commentaryEventResource = '/ComentariosEvento'



const apiPort = '7118';
const localApiUri = `https://localhost:${apiPort}/api`
const externalApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;