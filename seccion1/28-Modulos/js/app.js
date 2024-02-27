import alias, { nombreCliente, ahorro, mostrarInformacion, verificarSaldo, Cliente } from "./cliente.js";
import { Empresa as Emp} from "./empresa.js";

alias();

console.log(nombreCliente, ahorro);
mostrarInformacion(nombreCliente, ahorro);
verificarSaldo(ahorro);

const cliente = new Cliente('Roberto', 1203);
cliente.mostrarInformacion();

const empresa = new Emp('Loopcrack', 1000000000 ,'Desarrollo web');
empresa.mostrarInformacion();