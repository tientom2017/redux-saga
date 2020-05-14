const styles = (theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        zIndex: '10'
      },
      wrapperContent: {
        width: '100%',
        padding: 10,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      sideBar: {
        zIndex: '10'
      }
});

export default styles;