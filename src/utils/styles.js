import cxs from 'cxs';

export const backgroundClassName = cxs({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  zIndex: '-3',
  backgroundColor: '#F9F9F9'
})

export const mainClassName = cxs({
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

export const subClassName = cxs({
  flex: 1
});

export const pageClassName = cxs({})

export const blogPageClassName = cxs({
  padding: '2rem'
});

export const headerClassName = cxs({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#000',
  padding: '1.5rem 1rem'
});

export const footerClassName = cxs({
  textAlign: 'center',
  backgroundColor: '#222',
  color: '#444',
  padding: '1.25rem 1rem'
})

const linkClassName = {
  textDecoration: 'none',
  ':hover': {
    opacity: '0.8'
  }
};

export const linkHeaderClassName = cxs({
  ...linkClassName,
  fontWeight: 400,
  fontSize: '1.25rem',
  color: '#FFF',
  paddingRight: '1rem'
});

export const linkMainClassName = cxs({
  ...linkClassName,
  color: '#000',
});

const buttonClassName = {
  fontWeight: 300,
  textAlign: 'center',
  padding: '.5rem .75rem',
  fontSize: '20px',
  margin: '1.5rem 1rem 1.5rem 0',
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    opacity: '0.8'
  },
  ':disabled': {
    opacity: '0.3',
    cursor: 'not-allowed'
  }
};

export const primaryButtonClassName = cxs({
  ...buttonClassName,
  backgroundColor: '#000',
  color: 'white',
  border: '1px solid #000',
});

export const neutralButtonClassName = cxs({
  ...buttonClassName,
  color: '#000',
  border: '1px solid #444',
})

export const header1ClassName = cxs({
  fontSize: '30px',
  fontWeight: 500
});

export const header2ClassName = cxs({
  fontSize: '28px',
  fontWeight: 300
});

export const paragraphClassName = cxs({
  fontSize: '20px',
  margin: '0 0 1rem 0',
  fontWeight: 200
});

export const sectionClassName = cxs({
  flex: 1,
  zIndex: '-2',
  backgroundColor: '#222',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh'
});

export const smallAboutClassName = cxs({
  textAlign: 'center',
  paddingBottom: '1rem'
});

export const collectionSectionClassName = cxs({
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: '#F2F2F2',
  paddingBottom: '1.5rem'
})

export const collectionClassName = cxs({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
});

export const collectionBoxesClassName = cxs({
  width: '12rem',
  height: '15rem',
  backgroundColor: '#222',
  margin: '0 2rem'
});

export const shopClassName = cxs({
  textAlign: 'center'
});

document.querySelector('body').style.margin = 0;