    const styles = () => ({
    wrap: {
        display: 'flex',
        overflow: 'hidden',
        zIndex: 10,
    },
    linkcs: {
        textDecoration: 'none',
        color: '#000000',
        zIndex: 10,
    },
    drawer: {
        zIndex: 10,
    },
    activeLink: {
        '&>div': {
            backgroundColor: 'blue'
        }
    }
});

export default styles;