const setTokenWithScope = (scope = 'CustomerPortal.DB.Read') => {
  const mockJWT =
    'Bearer ...';
  const payloadJWT = {
    name: 'name',
    createdOn: 'customer-portal',
    app: 'customer-portal',
    scopes: [scope],
    country: 'BR',
  };
  const payloadJWTEncoded = cy.window().specWindow.btoa(JSON.stringify(payloadJWT));
  localStorage.setItem('token', mockJWT.replace('[PAYLOAD]', payloadJWTEncoded));
  localStorage.setItem('authTimestamp', Date.now().toString());
};

const PermissionsPage = {
  setTokenWithScope,
};

export default PermissionsPage;
