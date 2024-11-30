import { labelerServer } from './label.js';

const assignLabelToUser = async (did, label) => {
  try {
    // Crear o actualizar un label
    await labelerServer.createLabel({
      uri: did,
      val: label,
    });
    console.log(`Successfully labeled ${did} with ${label}`);
  } catch (error) {
    console.error(`Error assigning label to ${did}: ${error.message}`);
  }
};

// Asigna un label específico a un usuario
assignLabelToUser('did:plc:3ufprdncgl2ebe32cgs42gcb', 'bondsmith-path');
