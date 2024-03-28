import Citas from "../js/classes/Citas";

describe('Testing de la clase Citas', () => {
    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hunter',
            propietario: 'Fernando',
            telefono: '1234567890',
            fecha: '22-03-2024',
            hora:'2:57',
            sintomas: 'Fiebre'
        }
        citas.agregarCita(citaObj);
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar una cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Eli',
            propietario: 'Fernando',
            telefono: '1234567890',
            fecha: '22-03-2024',
            hora:'2:57',
            sintomas: 'Fiebre'
        }
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar una cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });

   
})