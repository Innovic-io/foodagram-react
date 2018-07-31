export const styles = theme => ({
  appBorder: {
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,.0975)',
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 540
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,.0975)',
  },
  profileName: {
    textAlign: 'left',
    marginTop: 20,
  },
  img: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '-webkit-fill-available',
  },
  avatar: {
    margin: 10,
    justifyContent: 'center',

  },
  buttonContainer: {
    display: 'flex',
  },
  rightSideFlex: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  sideFlexCommentBox: {
    padding: 20,
    flexGrow: 1,
    maxHeight: '325px',
    minHeight: '325px',
    overflow: 'auto'
  },
  sideDisableGrow: {
    flexBasis: 'auto'
  }
});

