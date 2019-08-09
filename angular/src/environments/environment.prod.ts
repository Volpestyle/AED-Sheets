export const environment = {
  production: true,
  roles: {
    receiveTexts: { permittedRoles: ['ADMIN', 'GETTEXTS'] },
    manageLookups: { permittedRoles: ['ADMIN'] },
    manageUsers: { permittedRoles: ['ADMIN'] },
    //submitEntry: { permittedRoles: ['SUBMITTER', 'ADMIN'] },
    deleteEntry: { permittedRoles: ['ADMIN'] },
    editEntry: { permittedRoles: ['ADMIN'] },
    addNote: { permittedRoles: ['ADMIN'] },
    addSubToOtherUser: { permittedRoles: ['ADMIN'] },
  },
};
